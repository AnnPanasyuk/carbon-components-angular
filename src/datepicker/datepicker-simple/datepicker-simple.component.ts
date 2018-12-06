import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-date-picker-simple",
	template: `
		<div class="bx--form-item">
			<div class="bx--date-picker bx--date-picker--simple bx--date-picker--short">
				<div class="bx--date-picker-container">
					<label for="date-picker-4" class="bx--label">Date Picker label</label>
					<input type="text" id="date-picker-4" class="bx--date-picker__input" pattern="\d{1,2}/\d{4}"
					placeholder="mm/yyyy" data-date-picker-input/>
				</div>
			</div>
		</div>
<br>
		<div class="bx--form-item">
			<div class="bx--date-picker bx--date-picker--simple">
				<div class="bx--date-picker-container">
				<label for="date-picker-6" class="bx--label">Date Picker label</label>
				<input data-invalid type="text" id="date-picker-6" class="bx--date-picker__input" pattern="\d{1,2}/\d{1,2}/\d{4}"
				placeholder="mm/dd/yyyy" data-date-picker-input />
				<div class="bx--form-requirement">
					Invalid date format.
				</div>
				</div>
			</div>
		</div>
	`
})
export class DatePickerSimple {

}
