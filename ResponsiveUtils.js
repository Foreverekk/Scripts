
/**
 * Script Name: ResponsiveUtils
 * Description: A utility to detect and respond to responsive breakpoints dynamically.
 * Author: Foreverekk
 */

//
export class ResponsiveUtils {
    /**
     * Constructor for ResponsiveUtils class.
     *
     * @param {Object} breakpoints breakpoints object with keys as
     *   names of breakpoints, and values as widths in pixels.
     *   Example: { mobile: 0, tablet: 768, desktop: 1024 }
     */
    constructor(breakpoints) {
        this.breakpoints = breakpoints;
        this.currentBreakpoint = null;

        window.addEventListener('resize', () => this.detectBreakpoint());
        this.detectBreakpoint();
    }

    /**
     * Detects the current breakpoint based on the window width.
     * Iterates through the breakpoints object and logs the current breakpoint
     * when it changes.
     * @returns {void}
     */
    detectBreakpoint() {
        const width = window.innerWidth;
        for (const [breakpoint, minWidth] of Object.entries(this.breakpoints)) {
            if (width >= minWidth) {
                if (this.currentBreakpoint !== breakpoint) {
                    this.currentBreakpoint = breakpoint;
                    console.log(`Breakpoint changed to: ${breakpoint}`);
                }
                return;
            }
        }
    }
}

// Example Usage:
new ResponsiveUtils({
    mobile: 0,
    tablet: 768,
    desktop: 1024,
});
