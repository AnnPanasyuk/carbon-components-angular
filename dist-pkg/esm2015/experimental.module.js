/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, SkipSelf, Optional } from "@angular/core";
import { ExperimentalService } from "./experimental.service";
/**
 * @param {?} parentService
 * @return {?}
 */
export function EXPERIMENTAL_SERVICE_PROVIDER_FACTORY(parentService) {
    return parentService || new ExperimentalService();
}
/** @type {?} */
export const EXPERIMENTAL_SERVICE_PROVIDER = {
    provide: ExperimentalService,
    deps: [[new Optional(), new SkipSelf(), ExperimentalService]],
    useFactory: EXPERIMENTAL_SERVICE_PROVIDER_FACTORY
};
class ExperimentalModule {
}
ExperimentalModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    ExperimentalService,
                    EXPERIMENTAL_SERVICE_PROVIDER
                ]
            },] }
];
export { ExperimentalService, ExperimentalModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpbWVudGFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJleHBlcmltZW50YWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRzdELE1BQU0sZ0RBQWdELGFBQWtDO0lBQ3ZGLE9BQU8sYUFBYSxJQUFJLElBQUksbUJBQW1CLEVBQUUsQ0FBQztDQUNsRDs7QUFFRCxhQUFhLDZCQUE2QixHQUFHO0lBQzVDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxVQUFVLEVBQUUscUNBQXFDO0NBQ2pELENBQUM7QUFFRjs7O1lBQUMsUUFBUSxTQUFDO2dCQUNULFNBQVMsRUFBRTtvQkFDVixtQkFBbUI7b0JBQ25CLDZCQUE2QjtpQkFDN0I7YUFDRDs7QUFHRCxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFeHBlcmltZW50YWxTZXJ2aWNlIH0gZnJvbSBcIi4vZXhwZXJpbWVudGFsLnNlcnZpY2VcIjtcblxuLy8gZWl0aGVyIHByb3ZpZGVzIGEgbmV3IGluc3RhbmNlIG9mIEV4cGVyaW1lbnRhbFNlcnZpY2UsIG9yIHJldHVybnMgdGhlIHBhcmVudFxuZXhwb3J0IGZ1bmN0aW9uIEVYUEVSSU1FTlRBTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50U2VydmljZTogRXhwZXJpbWVudGFsU2VydmljZSkge1xuXHRyZXR1cm4gcGFyZW50U2VydmljZSB8fCBuZXcgRXhwZXJpbWVudGFsU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgRVhQRVJJTUVOVEFMX1NFUlZJQ0VfUFJPVklERVIgPSB7XG5cdHByb3ZpZGU6IEV4cGVyaW1lbnRhbFNlcnZpY2UsXG5cdGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBFeHBlcmltZW50YWxTZXJ2aWNlXV0sXG5cdHVzZUZhY3Rvcnk6IEVYUEVSSU1FTlRBTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUllcbn07XG5cbkBOZ01vZHVsZSh7XG5cdHByb3ZpZGVyczogW1xuXHRcdEV4cGVyaW1lbnRhbFNlcnZpY2UsXG5cdFx0RVhQRVJJTUVOVEFMX1NFUlZJQ0VfUFJPVklERVJcblx0XVxufSlcbmNsYXNzIEV4cGVyaW1lbnRhbE1vZHVsZSB7IH1cblxuZXhwb3J0IHtcblx0RXhwZXJpbWVudGFsU2VydmljZSxcblx0RXhwZXJpbWVudGFsTW9kdWxlXG59O1xuIl19