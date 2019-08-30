/**
 * A convinence directive for applying styling to a link.
 *
 * [See demo](../../?path=/story/link--basic)
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 *
 * <example-url>../../iframe.html?id=link--basic</example-url>
 */
export declare class Link {
    baseClass: boolean;
    /**
     * Automatically set to `-1` when link is disabled.
     */
    tabindex: any;
    /**
     * Set to true to disable link.
     */
    disabled: boolean;
    private _disabled;
}
