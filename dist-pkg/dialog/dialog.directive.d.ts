import { EventEmitter, OnInit, OnDestroy, ElementRef, TemplateRef, ViewContainerRef, OnChanges } from "@angular/core";
import { DialogService } from "./dialog.service";
import { DialogConfig } from "./dialog-config.interface";
/**
 * A generic directive that can be inherited from to create dialogs (for example, a tooltip or popover)
 *
 * This class contains the relevant initialization code, specific templates, options, and additional inputs
 * should be specified in the derived class.
 *
 * NOTE: All child classes should add `DialogService` as a provider, otherwise they will lose context that
 * the service relies on.
 */
export declare class DialogDirective implements OnInit, OnDestroy, OnChanges {
    protected elementRef: ElementRef;
    protected viewContainerRef: ViewContainerRef;
    protected dialogService: DialogService;
    static dialogCounter: number;
    /**
     * Title for the dialog
     */
    title: string;
    /**
     * Dialog body content.
     */
    ibmDialog: string | TemplateRef<any>;
    /**
     * Defines how the Dialog is triggered.(Hover and click behave the same on mobile - both respond to a single tap)
     */
    trigger: "click" | "hover" | "mouseenter";
    /**
     * Defines how the Dialog close event is triggered.
     *
     * [See here](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event)
     * for more on the difference between `mouseleave` and `mouseout`.
     *
     * Defaults to `click` when `trigger` is set to `click`.
     */
    closeTrigger: "mouseout" | "mouseleave";
    /**
     * Placement of the dialog, usually relative to the element the directive is on.
     */
    placement: string;
    /**
     * Class to add to the dialog container
     */
    wrapperClass: string;
    /**
     * Spacing between the dialog and it's triggering element
     */
    gap: number;
    /**
     * Deprecated. Defaults to true. Use appendInline to keep dialogs within page flow
     * Value `true` appends Dialog to the body (to break out of containers)
     */
    appendToBody: boolean;
    /**
     * Set to `true` to open the dialog next to the triggering component
     */
    appendInline: boolean;
    /**
     * Optional data for templates
     */
    data: {};
    /**
     * Config object passed to the rendered component
     */
    dialogConfig: DialogConfig;
    /**
     * Emits an event when the dialog is closed
     */
    onClose: EventEmitter<any>;
    /**
     * Emits an event when the dialog is opened
     */
    onOpen: EventEmitter<any>;
    role: string;
    expanded: boolean;
    hasPopup: boolean;
    readonly ariaOwns: string;
    /**
     * Creates an instance of DialogDirective.
     * @param elementRef
     * @param viewContainerRef
     * @param dialogService
     */
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, dialogService: DialogService);
    /**
     * Overrides 'touchstart' event to trigger a toggle on the Dialog.
     */
    onTouchStart(evt: any): void;
    ngOnChanges(): void;
    /**
     * Sets the config object and binds events for hovering or clicking before
     * running code from child class.
     */
    ngOnInit(): void;
    /**
     * When the host dies, kill the popover.
     * - Useful for use in a modal or similar.
     */
    ngOnDestroy(): void;
    /**
     * Helper method to call dialogService 'open'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    open(): void;
    /**
     * Helper method to call dialogService 'toggle'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    toggle(): void;
    /**
     * Helper method to call dialogService 'close'.
     * - Enforce accessibility by updating an aria attr for nativeElement.
     */
    close(): void;
    /**
     * Empty method for child classes to override and specify additional init steps.
     * Run after DialogDirective completes it's ngOnInit.
     */
    protected onDialogInit(): void;
}
