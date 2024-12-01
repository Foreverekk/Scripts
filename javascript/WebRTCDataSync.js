/**
 * Script Name: WebRTCDataSync
 * Description: A WebRTC-based real-time data synchronization utility for peer-to-peer communication.
 * Author: Foreverekk
 */

//
export class WebRTCDataSync {
    constructor() {
        this.peerConnections = [];
        this.dataChannel = null;
    }

    /**
     * Initializes a new WebRTC peer connection, either as the initializer or responder.
     * If isInitiator is true, the method will create a data channel and send an offer to the peer.
     * If isInitiator is false, the method will wait for the peer to send an offer and create a data
     * channel. The method will also set up the ICE candidate event handler to log all candidates.
     *
     * @param {boolean} isInitiator - Whether the local peer should be the initializer or responder.
     */
    async initializePeer(isInitiator) {
        const config = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
        const peerConnection = new RTCPeerConnection(config);

        if (isInitiator) {
            this.dataChannel = peerConnection.createDataChannel('sync');
            this.setupDataChannel(this.dataChannel);
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
        } else {
            peerConnection.ondatachannel = (event) => this.setupDataChannel(event.channel);
        }

        /**
         * Handles ICE candidate events to log all candidates.
         * @param {RTCPeerConnectionIceEvent} event - The ICE candidate event.
         * @listens peerConnection#icecandidate
         */
        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                console.log('ICE Candidate:', event.candidate);
            }
        };

        this.peerConnections.push(peerConnection);
    }

    /**
     * Sets up the data channel event handlers to log events and store the channel on the
     * WebRTCDataSync instance.
     *
     * @param {RTCDataChannel} channel - The data channel to set up.
     * @private
     */
    setupDataChannel(channel) {
        channel.onmessage = (event) => console.log('Received:', event.data);
        channel.onopen = () => console.log('Data channel open');
        channel.onclose = () => console.log('Data channel closed');
        this.dataChannel = channel;
    }

    /**
     * Sends data to the remote peer through the data channel.
     * The data is JSON stringified before being sent.
     * @param {*} data - The data to be sent.
     */
    send(data) {
        if (this.dataChannel && this.dataChannel.readyState === 'open') {
            this.dataChannel.send(JSON.stringify(data));
        }
    }
}

// Example Usage:
const rtc = new WebRTCDataSync();
rtc.initializePeer(true);
rtc.send({ message: 'Hello, peer!' });
