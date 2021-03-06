/// <reference path="./node_modules/nativescript-ui-core/ios.d.ts" />
/// <reference path="./node_modules/nativescript-ui-autocomplete/ios.d.ts" />

declare class TKDataForm extends UIView {

	static alloc(): TKDataForm; // inherited from NSObject

	static appearance(): TKDataForm; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataForm; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataForm; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataForm; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataForm; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataForm; // inherited from UIAppearance

	static new(): TKDataForm; // inherited from NSObject

	allowScroll: boolean;

	commitMode: TKDataFormCommitMode;

	dataSource: TKDataFormDataSource;

	delegate: TKDataFormDelegate;

	groupSpacing: number;

	owner: UIViewController;

	readOnly: boolean;

	validationMode: TKDataFormValidationMode;

	constructor(o: { JSONAnnotationsResource: string; ofType: string; });

	commit(): void;

	commitForced(): void;

	editorValueChanged(editor: TKDataFormEditor): void;

	groupViewForGroup(group: TKEntityPropertyGroup): TKEntityPropertyGroupView;

	hasValidationErrors(): boolean;

	initWithJSONAnnotationsResourceOfType(resourceName: string, type: string): this;

	onValidationResultValuePropertyEditor(result: boolean, value: NSObject, property: TKEntityProperty, editor: TKDataFormEditor): void;

	onValidationStartedEditor(property: TKEntityProperty, editor: TKDataFormEditor): void;

	registerEditorForProperty(editorClass: typeof NSObject, propertyName: string): void;

	registerEditorForPropertyOfClass(editorClass: typeof NSObject, propertyClass: typeof NSObject): void;

	registerEditorForPropertyOfType(editorClass: typeof NSObject, propertyType: TKEntityPropertyType): void;

	reloadData(): void;

	setEditorOnFocus(editor: TKDataFormEditor): void;

	setupWithJSONAnnotationsString(str: string): void;

	update(): void;

	updateEditorForProperty(property: TKEntityProperty): void;

	validate(): void;
}

declare class TKDataFormAccessoryView extends UIView {

	static alloc(): TKDataFormAccessoryView; // inherited from NSObject

	static appearance(): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormAccessoryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormAccessoryView; // inherited from UIAppearance

	static new(): TKDataFormAccessoryView; // inherited from NSObject

	readonly doneBarItem: UIBarButtonItem;

	readonly nextBarItem: UIBarButtonItem;

	readonly previousBarItem: UIBarButtonItem;

	readonly toolbar: UIToolbar;
}

declare class TKDataFormAutoCompleteInlineEditor extends TKDataFormEditor {

	static alloc(): TKDataFormAutoCompleteInlineEditor; // inherited from NSObject

	static appearance(): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormAutoCompleteInlineEditor; // inherited from UIAppearance

	static new(): TKDataFormAutoCompleteInlineEditor; // inherited from NSObject

	autoCompleteView: TKAutoCompleteTextView;

	dataSource: TKDataSourceExtended;

	options: NSArray<any>;

	selectedItem: string;
}

declare class TKDataFormAutocompleteController extends TKAutoCompleteController implements TKAutoCompleteDelegate {

	static alloc(): TKDataFormAutocompleteController; // inherited from NSObject

	static new(): TKDataFormAutocompleteController; // inherited from NSObject

	readonly dataSource: TKDataSourceExtended;

	editor: TKDataFormAutocompleteEditor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	autoCompleteDidAddToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidAutoComplete(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidDeselectToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidRemoveToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidSelectToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): void;

	autoCompleteDidStartEditing(autocomplete: TKAutoCompleteTextView): void;

	autoCompleteShouldAddToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteShouldRemoveToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): boolean;

	autoCompleteSuggestionListUpdated(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;

	autoCompleteViewForToken(autocomplete: TKAutoCompleteTextView, token: TKAutoCompleteToken): TKAutoCompleteTokenView;

	autoCompleteWillShowSuggestionList(autocomplete: TKAutoCompleteTextView, suggestionList: NSArray<TKAutoCompleteToken>): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormAutocompleteEditor extends TKDataFormViewControllerEditor {

	static alloc(): TKDataFormAutocompleteEditor; // inherited from NSObject

	static appearance(): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormAutocompleteEditor; // inherited from UIAppearance

	static new(): TKDataFormAutocompleteEditor; // inherited from NSObject

	readonly accessoryImageView: UIImageView;

	options: NSArray<any>;

	placeholder: string;

	selectedItem: string;

	readonly selectedOptionLabel: TKLabel;

	showAccessoryImage: boolean;
}

declare const enum TKDataFormCommitMode {

	Immediate = 0,

	OnLostFocus = 1,

	Manual = 2
}

interface TKDataFormConverter extends NSObjectProtocol {

	convertFrom(source: any): any;

	convertTo(source: any): any;
}
declare var TKDataFormConverter: {

	prototype: TKDataFormConverter;
};

declare class TKDataFormCustomEditor extends TKDataFormEditor {

	static alloc(): TKDataFormCustomEditor; // inherited from NSObject

	static appearance(): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormCustomEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormCustomEditor; // inherited from UIAppearance

	static new(): TKDataFormCustomEditor; // inherited from NSObject

	delegate: TKDataFormCustomEditorDelegate;

	readonly editorView: UIView;

	notifyValueChange(): void;
}

interface TKDataFormCustomEditorDelegate extends NSObjectProtocol {

	editorShouldApplyValueEditorView(editor: TKDataFormCustomEditor, value: NSObject, view: UIView): void;

	editorWillCreateView(editor: TKDataFormCustomEditor): UIView;

	editorWillReturnValueEditorView(editor: TKDataFormCustomEditor, view: UIView): NSObject;
}
declare var TKDataFormCustomEditorDelegate: {

	prototype: TKDataFormCustomEditorDelegate;
};

interface TKDataFormDataSource extends NSObjectProtocol {

	dataFormEditorClassForProperty?(dataForm: TKDataForm, property: TKEntityProperty): typeof NSObject;

	dataFormGroupAtIndex(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroup;

	dataFormNumberOfPropertiesInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormPropertyInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, propertyIndex: number): TKEntityProperty;

	dataFormSetValueForProperty(dataForm: TKDataForm, value: any, property: TKEntityProperty): boolean;

	dataFormTitleForHeaderInGroup?(dataForm: TKDataForm, groupIndex: number): string;

	indexOfGroupInDataForm(group: TKEntityPropertyGroup): number;

	numberOfGroupsInDataForm?(dataForm: TKDataForm): number;
}
declare var TKDataFormDataSource: {

	prototype: TKDataFormDataSource;
};

declare class TKDataFormDatePickerEditor extends TKDataFormInlineEditor {

	static alloc(): TKDataFormDatePickerEditor; // inherited from NSObject

	static appearance(): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormDatePickerEditor; // inherited from UIAppearance

	static new(): TKDataFormDatePickerEditor; // inherited from NSObject

	dateFormatter: NSDateFormatter;

	readonly datePicker: UIDatePicker;

	placeholder: string;
}

declare class TKDataFormDecimalEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormDecimalEditor; // inherited from NSObject

	static appearance(): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormDecimalEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormDecimalEditor; // inherited from UIAppearance

	static new(): TKDataFormDecimalEditor; // inherited from NSObject
}

interface TKDataFormDelegate extends NSObjectProtocol {

	dataFormCreateEditorForProperty?(dataForm: TKDataForm, property: TKEntityProperty): TKDataFormEditor;

	dataFormDidCollapseGroupView?(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidCommitProperty?(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidDeselectEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidEditProperty?(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidExpandGroupView?(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidFinishCommit?(dataForm: TKDataForm, result: boolean): boolean;

	dataFormDidFinishEditorIntitialization?(dataForm: TKDataForm): void;

	dataFormDidFinishValidation?(dataForm: TKDataForm, result: boolean): boolean;

	dataFormDidSelectEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidValidatePropertyEditor?(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): void;

	dataFormHeightForEditorInGroupAtIndex?(dataForm: TKDataForm, groupIndex: number, editorIndex: number): number;

	dataFormHeightForHeaderInGroup?(dataForm: TKDataForm, groupIndex: number): number;

	dataFormInitViewControllerForEditor?(dataForm: TKDataForm, viewController: UIViewController, editor: TKDataFormViewControllerEditor): void;

	dataFormSetupEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormUpdateEditorForProperty?(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormUpdateGroupViewForGroupAtIndex?(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView, groupIndex: number): void;

	dataFormValidatePropertyEditor?(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): boolean;

	dataFormViewForHeaderInGroup?(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroupTitleView;

	dataFormWillCommitProperty?(dataForm: TKDataForm, property: TKEntityProperty): boolean;

	inputAccessoryViewForDataForm?(dataForm: TKDataForm): TKDataFormAccessoryView;
}
declare var TKDataFormDelegate: {

	prototype: TKDataFormDelegate;
};

declare class TKDataFormEditor extends UIView {

	static alloc(): TKDataFormEditor; // inherited from NSObject

	static appearance(): TKDataFormEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormEditor; // inherited from UIAppearance

	static new(): TKDataFormEditor; // inherited from NSObject

	readonly editor: UIView;

	enabled: boolean;

	readonly feedbackImageView: TKImageView;

	readonly feedbackLabel: UILabel;

	readonly gridLayout: TKGridLayout;

	readonly imageView: TKImageView;

	readonly isTextEditor: boolean;

	labelPosition: TKDataFormLabelPosition;

	owner: TKDataForm;

	property: TKEntityProperty;

	readonly selected: boolean;

	selectedView: TKView;

	readonly style: TKDataFormEditorStyle;

	readonly textLabel: TKLabel;

	value: any;

	constructor(o: { property: TKEntityProperty; });

	constructor(o: { property: TKEntityProperty; owner: TKDataForm; });

	initWithProperty(property: TKEntityProperty): this;

	initWithPropertyOwner(property: TKEntityProperty, owner: TKDataForm): this;

	loadPropertyValue(): void;

	update(): void;

	updateControlValue(): void;
}

declare class TKDataFormEditorStyle extends TKStyleNode {

	static alloc(): TKDataFormEditorStyle; // inherited from NSObject

	static new(): TKDataFormEditorStyle; // inherited from NSObject

	accessoryArrowSize: CGSize;

	accessoryArrowStroke: TKStroke;

	editorOffset: UIOffset;

	feedbackImageSize: CGSize;

	feedbackImageViewOffset: UIOffset;

	feedbackLabelOffset: UIOffset;

	fill: TKFill;

	imageViewOffset: UIOffset;

	imageViewSize: CGSize;

	insets: UIEdgeInsets;

	separatorColor: TKFill;

	separatorLeadingSpace: number;

	separatorTrailingSpace: number;

	stroke: TKStroke;

	textLabelDisplayMode: TKDataFormEditorTextLabelDisplayMode;

	textLabelOffset: UIOffset;

	textLabelWidth: number;
}

declare const enum TKDataFormEditorTextLabelDisplayMode {

	Show = 0,

	Hidden = 1
}

declare class TKDataFormEmailEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormEmailEditor; // inherited from NSObject

	static appearance(): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormEmailEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormEmailEditor; // inherited from UIAppearance

	static new(): TKDataFormEmailEditor; // inherited from NSObject
}

declare class TKDataFormEmailValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormEmailValidator; // inherited from NSObject

	static new(): TKDataFormEmailValidator; // inherited from NSObject
}

declare class TKDataFormEntityDataSource extends TKEntity implements TKDataFormDataSource {

	static alloc(): TKDataFormEntityDataSource; // inherited from NSObject

	static entityWithObject(sourceObject: NSObject): TKDataFormEntityDataSource; // inherited from TKEntity

	static new(): TKDataFormEntityDataSource; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataFormEditorClassForProperty(dataForm: TKDataForm, property: TKEntityProperty): typeof NSObject;

	dataFormGroupAtIndex(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroup;

	dataFormNumberOfPropertiesInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormPropertyInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, propertyIndex: number): TKEntityProperty;

	dataFormSetValueForProperty(dataForm: TKDataForm, value: any, property: TKEntityProperty): boolean;

	dataFormTitleForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): string;

	indexOfGroupInDataForm(group: TKEntityPropertyGroup): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfGroupsInDataForm(dataForm: TKDataForm): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormGroupInfo extends NSObject {

	static alloc(): TKDataFormGroupInfo; // inherited from NSObject

	static new(): TKDataFormGroupInfo; // inherited from NSObject

	group: TKEntityPropertyGroup;

	properties: NSArray<any>;

	constructor(o: { group: TKEntityPropertyGroup; });

	initWithGroup(group: TKEntityPropertyGroup): this;
}

declare class TKDataFormGroupTitleStyle extends TKStyleNode {

	static alloc(): TKDataFormGroupTitleStyle; // inherited from NSObject

	static new(): TKDataFormGroupTitleStyle; // inherited from NSObject

	fill: TKFill;

	insets: UIEdgeInsets;

	separatorColor: TKFill;

	separatorLeadingSpace: number;

	separatorTrailingSpace: number;

	stroke: TKStroke;
}

declare class TKDataFormInlineEditor extends TKDataFormEditor {

	static alloc(): TKDataFormInlineEditor; // inherited from NSObject

	static appearance(): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormInlineEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormInlineEditor; // inherited from UIAppearance

	static new(): TKDataFormInlineEditor; // inherited from NSObject

	readonly accessoryImageView: UIImageView;

	displayMode: TKDataFormInlineEditorDisplayMode;

	readonly editorValueLabel: TKLabel;

	showAccessoryImage: boolean;
}

declare const enum TKDataFormInlineEditorDisplayMode {

	Inline = 0,

	Modal = 1
}

declare class TKDataFormIsTrueValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormIsTrueValidator; // inherited from NSObject

	static new(): TKDataFormIsTrueValidator; // inherited from NSObject
}

declare class TKDataFormLabelEditor extends TKDataFormEditor {

	static alloc(): TKDataFormLabelEditor; // inherited from NSObject

	static appearance(): TKDataFormLabelEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormLabelEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormLabelEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormLabelEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormLabelEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormLabelEditor; // inherited from UIAppearance

	static new(): TKDataFormLabelEditor; // inherited from NSObject

	readonly labelView: UILabel;
}

declare const enum TKDataFormLabelPosition {

	TKDataFormLabelPositionLeft = 0,

	TKDataFormLabelPositionTop = 1
}

declare class TKDataFormManualValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormManualValidator; // inherited from NSObject

	static new(): TKDataFormManualValidator; // inherited from NSObject

	delegate: TKDataFormValidationProviderDelegate;
}

declare class TKDataFormMaximumLengthValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormMaximumLengthValidator; // inherited from NSObject

	static new(): TKDataFormMaximumLengthValidator; // inherited from NSObject

	maximumLegth: number;

	constructor(o: { maximumLength: number; });

	initWithMaximumLength(maximumLength: number): this;
}

declare class TKDataFormMinimumLengthValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormMinimumLengthValidator; // inherited from NSObject

	static new(): TKDataFormMinimumLengthValidator; // inherited from NSObject

	minimumLength: number;

	constructor(o: { minimumLength: number; });

	initWithMinimumLength(minimumLength: number): this;
}

declare class TKDataFormMultilineTextEditor extends TKDataFormEditor implements UITextViewDelegate {

	static alloc(): TKDataFormMultilineTextEditor; // inherited from NSObject

	static appearance(): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormMultilineTextEditor; // inherited from UIAppearance

	static new(): TKDataFormMultilineTextEditor; // inherited from NSObject

	dynamicHeight: boolean;

	maxDynamicHeight: number;

	readonly textView: UITextView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKDataFormNamePhoneEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormNamePhoneEditor; // inherited from NSObject

	static appearance(): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormNamePhoneEditor; // inherited from UIAppearance

	static new(): TKDataFormNamePhoneEditor; // inherited from NSObject
}

declare class TKDataFormNonEmptyValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormNonEmptyValidator; // inherited from NSObject

	static new(): TKDataFormNonEmptyValidator; // inherited from NSObject
}

declare class TKDataFormNumberEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormNumberEditor; // inherited from NSObject

	static appearance(): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormNumberEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormNumberEditor; // inherited from UIAppearance

	static new(): TKDataFormNumberEditor; // inherited from NSObject

	formatter: NSNumberFormatter;
}

declare class TKDataFormOptionsEditor extends TKDataFormViewControllerEditor {

	static alloc(): TKDataFormOptionsEditor; // inherited from NSObject

	static appearance(): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormOptionsEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormOptionsEditor; // inherited from UIAppearance

	static new(): TKDataFormOptionsEditor; // inherited from NSObject

	readonly accessoryImageView: UIImageView;

	options: NSArray<any>;

	selectedIndex: number;

	readonly selectedOptionLabel: TKLabel;

	showAccessoryImage: boolean;
}

declare class TKDataFormOptionsViewController extends UITableViewController {

	static alloc(): TKDataFormOptionsViewController; // inherited from NSObject

	static new(): TKDataFormOptionsViewController; // inherited from NSObject

	editor: TKDataFormOptionsEditor;

	items: NSArray<any>;
}

declare class TKDataFormPasswordEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormPasswordEditor; // inherited from NSObject

	static appearance(): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormPasswordEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormPasswordEditor; // inherited from UIAppearance

	static new(): TKDataFormPasswordEditor; // inherited from NSObject
}

declare class TKDataFormPhoneEditor extends TKDataFormTextFieldEditor {

	static alloc(): TKDataFormPhoneEditor; // inherited from NSObject

	static appearance(): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormPhoneEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormPhoneEditor; // inherited from UIAppearance

	static new(): TKDataFormPhoneEditor; // inherited from NSObject
}

declare class TKDataFormPhoneValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormPhoneValidator; // inherited from NSObject

	static new(): TKDataFormPhoneValidator; // inherited from NSObject
}

declare class TKDataFormPickerViewEditor extends TKDataFormInlineEditor {

	static alloc(): TKDataFormPickerViewEditor; // inherited from NSObject

	static appearance(): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormPickerViewEditor; // inherited from UIAppearance

	static new(): TKDataFormPickerViewEditor; // inherited from NSObject

	options: NSArray<any>;

	readonly pickerView: UIPickerView;

	selectedIndex: number;
}

declare class TKDataFormPropertyValidator extends NSObject implements TKDataFormValidator {

	static alloc(): TKDataFormPropertyValidator; // inherited from NSObject

	static new(): TKDataFormPropertyValidator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	errorMessage: string; // inherited from TKDataFormValidator

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	positiveMessage: string; // inherited from TKDataFormValidator

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateProperty(property: TKEntityProperty): boolean;
}

declare class TKDataFormRangeValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormRangeValidator; // inherited from NSObject

	static new(): TKDataFormRangeValidator; // inherited from NSObject

	range: TKRange;

	constructor(o: { range: TKRange; });

	initWithRange(range: TKRange): this;
}

declare class TKDataFormRegExValidator extends TKDataFormPropertyValidator {

	static alloc(): TKDataFormRegExValidator; // inherited from NSObject

	static new(): TKDataFormRegExValidator; // inherited from NSObject

	regEx: string;

	constructor(o: { regEx: string; });

	initWithRegEx(regEx: string): this;
}

declare class TKDataFormSegmentedEditor extends TKDataFormEditor {

	static alloc(): TKDataFormSegmentedEditor; // inherited from NSObject

	static appearance(): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormSegmentedEditor; // inherited from UIAppearance

	static new(): TKDataFormSegmentedEditor; // inherited from NSObject

	options: NSArray<any>;

	readonly segmentedControl: UISegmentedControl;

	selectedIndex: number;
}

declare class TKDataFormSliderEditor extends TKDataFormEditor {

	static alloc(): TKDataFormSliderEditor; // inherited from NSObject

	static appearance(): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormSliderEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormSliderEditor; // inherited from UIAppearance

	static new(): TKDataFormSliderEditor; // inherited from NSObject

	readonly sliderView: UISlider;

	stepValue: number;
}

declare class TKDataFormStepperEditor extends TKDataFormEditor {

	static alloc(): TKDataFormStepperEditor; // inherited from NSObject

	static appearance(): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormStepperEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormStepperEditor; // inherited from UIAppearance

	static new(): TKDataFormStepperEditor; // inherited from NSObject

	formatter: NSNumberFormatter;

	readonly stepperView: UIStepper;

	readonly valueLabel: UILabel;
}

declare class TKDataFormStringToDateConverter extends NSObject implements TKDataFormConverter {

	static alloc(): TKDataFormStringToDateConverter; // inherited from NSObject

	static new(): TKDataFormStringToDateConverter; // inherited from NSObject

	format: string;

	locale: NSLocale;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertFrom(source: any): any;

	convertTo(source: any): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormStringToTimeConverter extends NSObject implements TKDataFormConverter {

	static alloc(): TKDataFormStringToTimeConverter; // inherited from NSObject

	static new(): TKDataFormStringToTimeConverter; // inherited from NSObject

	format: string;

	locale: NSLocale;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertFrom(source: any): any;

	convertTo(source: any): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormSwitchEditor extends TKDataFormEditor {

	static alloc(): TKDataFormSwitchEditor; // inherited from NSObject

	static appearance(): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormSwitchEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormSwitchEditor; // inherited from UIAppearance

	static new(): TKDataFormSwitchEditor; // inherited from NSObject

	readonly switchView: UISwitch;
}

declare class TKDataFormTextFieldEditor extends TKDataFormEditor implements UITextFieldDelegate {

	static alloc(): TKDataFormTextFieldEditor; // inherited from NSObject

	static appearance(): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormTextFieldEditor; // inherited from UIAppearance

	static new(): TKDataFormTextFieldEditor; // inherited from NSObject

	readonly textField: TKTextField;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare class TKDataFormTimePickerEditor extends TKDataFormDatePickerEditor {

	static alloc(): TKDataFormTimePickerEditor; // inherited from NSObject

	static appearance(): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormTimePickerEditor; // inherited from UIAppearance

	static new(): TKDataFormTimePickerEditor; // inherited from NSObject
}

declare const enum TKDataFormValidationMode {

	Immediate = 0,

	OnLostFocus = 1,

	Manual = 2
}

interface TKDataFormValidationProviderDelegate extends NSObjectProtocol {

	validatorWillValidate(validator: TKDataFormManualValidator, property: TKEntityProperty): boolean;
}
declare var TKDataFormValidationProviderDelegate: {

	prototype: TKDataFormValidationProviderDelegate;
};

interface TKDataFormValidator extends NSObjectProtocol {

	errorMessage: string;

	positiveMessage: string;

	validateProperty(property: TKEntityProperty): boolean;
}
declare var TKDataFormValidator: {

	prototype: TKDataFormValidator;
};

declare class TKDataFormViewController extends UIViewController implements TKDataFormDataSource, TKDataFormDelegate {

	static alloc(): TKDataFormViewController; // inherited from NSObject

	static new(): TKDataFormViewController; // inherited from NSObject

	readonly dataForm: TKDataForm;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataFormCreateEditorForProperty(dataForm: TKDataForm, property: TKEntityProperty): TKDataFormEditor;

	dataFormDidCollapseGroupView(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidCommitProperty(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidDeselectEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidEditProperty(dataForm: TKDataForm, property: TKEntityProperty): void;

	dataFormDidExpandGroupView(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView): void;

	dataFormDidFinishCommit(dataForm: TKDataForm, result: boolean): boolean;

	dataFormDidFinishEditorIntitialization(dataForm: TKDataForm): void;

	dataFormDidFinishValidation(dataForm: TKDataForm, result: boolean): boolean;

	dataFormDidSelectEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormDidValidatePropertyEditor(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): void;

	dataFormEditorClassForProperty(dataForm: TKDataForm, property: TKEntityProperty): typeof NSObject;

	dataFormGroupAtIndex(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroup;

	dataFormHeightForEditorInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, editorIndex: number): number;

	dataFormHeightForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormInitViewControllerForEditor(dataForm: TKDataForm, viewController: UIViewController, editor: TKDataFormViewControllerEditor): void;

	dataFormNumberOfPropertiesInGroup(dataForm: TKDataForm, groupIndex: number): number;

	dataFormPropertyInGroupAtIndex(dataForm: TKDataForm, groupIndex: number, propertyIndex: number): TKEntityProperty;

	dataFormSetValueForProperty(dataForm: TKDataForm, value: any, property: TKEntityProperty): boolean;

	dataFormSetupEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormTitleForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): string;

	dataFormUpdateEditorForProperty(dataForm: TKDataForm, editor: TKDataFormEditor, property: TKEntityProperty): void;

	dataFormUpdateGroupViewForGroupAtIndex(dataForm: TKDataForm, groupView: TKEntityPropertyGroupView, groupIndex: number): void;

	dataFormValidatePropertyEditor(dataForm: TKDataForm, property: TKEntityProperty, editor: TKDataFormEditor): boolean;

	dataFormViewForHeaderInGroup(dataForm: TKDataForm, groupIndex: number): TKEntityPropertyGroupTitleView;

	dataFormWillCommitProperty(dataForm: TKDataForm, property: TKEntityProperty): boolean;

	indexOfGroupInDataForm(group: TKEntityPropertyGroup): number;

	inputAccessoryViewForDataForm(dataForm: TKDataForm): TKDataFormAccessoryView;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfGroupsInDataForm(dataForm: TKDataForm): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TKDataFormViewControllerEditor extends TKDataFormEditor {

	static alloc(): TKDataFormViewControllerEditor; // inherited from NSObject

	static appearance(): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKDataFormViewControllerEditor; // inherited from UIAppearance

	static new(): TKDataFormViewControllerEditor; // inherited from NSObject

	createViewController(): UIViewController;

	presentViewController(): void;
}

declare class TKEntity extends NSObject {

	static alloc(): TKEntity; // inherited from NSObject

	static entityWithObject(sourceObject: NSObject): TKEntity;

	static new(): TKEntity; // inherited from NSObject

	readonly defaultGroup: TKEntityPropertyGroup;

	readonly groups: NSArray<any>;

	readonly properties: NSArray<any>;

	sourceObject: NSObject;

	constructor(o: { dataFromJSONResource: string; ofType: string; rootItemKeyPath: string; });

	constructor(o: { JSONFromURL: string; rootItemKeyPath: string; completion: (p1: NSError) => void; });

	constructor(o: { JSONString: string; rootItemKeyPath: string; });

	constructor(o: { object: NSObject; });

	constructor(o: { object: NSObject; propertyNames: NSArray<any>; });

	addGroup(group: TKEntityPropertyGroup): void;

	addGroupWithNamePropertyNames(name: string, propertyNames: NSArray<any>): TKEntityPropertyGroup;

	commit(): boolean;

	groupAtIndex(index: number): TKEntityPropertyGroup;

	groupWithName(groupName: string): TKEntityPropertyGroup;

	initWithDataFromJSONResourceOfTypeRootItemKeyPath(name: string, type: string, rootItemKeyPath: string): this;

	initWithJSONFromURLRootItemKeyPathCompletion(url: string, rootItemKeyPath: string, completion: (p1: NSError) => void): this;

	initWithJSONStringRootItemKeyPath(str: string, rootItemKeyPath: string): this;

	initWithObject(sourceObject: NSObject): this;

	initWithObjectPropertyNames(sourceObject: NSObject, propertyNames: NSArray<any>): this;

	insertGroupAtIndex(group: TKEntityPropertyGroup, index: number): void;

	objectForKeyedSubscript(propertyName: string): TKEntityProperty;

	propertyWithName(propertyName: string): TKEntityProperty;

	removeAllGroups(): void;

	removeGroup(group: TKEntityPropertyGroup): void;

	removeGroupAtIndex(index: number): void;

	setSourceObjectWithProperties(sourceObject: NSObject, properties: NSArray<any>): void;

	setSourceObjectWithPropertyNames(sourceObject: NSObject, propertyNames: NSArray<any>): void;

	validate(): NSArray<any>;

	writeJSONToStream(outputStream: NSOutputStream): NSError;

	writeJSONToString(): string;
}

declare class TKEntityProperty extends NSObject {

	static alloc(): TKEntityProperty; // inherited from NSObject

	static new(): TKEntityProperty; // inherited from NSObject

	autoCompleteDisplayMode: TKAutoCompleteDisplayMode;

	converter: TKDataFormConverter;

	displayName: string;

	editorClass: typeof NSObject;

	errorImage: UIImage;

	errorMessage: string;

	formatter: NSFormatter;

	groupName: string;

	hidden: boolean;

	hintText: string;

	image: UIImage;

	index: number;

	isNullable: boolean;

	readonly isValid: boolean;

	layoutInfo: TKLayoutInfo;

	readonly name: string;

	readonly originalValue: any;

	readonly owner: TKEntity;

	pickersUseIndexValue: boolean;

	positiveImage: UIImage;

	positiveMessage: string;

	readonly propertyClass: typeof NSObject;

	range: TKRange;

	readOnly: boolean;

	required: boolean;

	step: number;

	type: TKEntityPropertyType;

	validators: NSArray<any>;

	valueCandidate: any;

	valuesProvider: NSArray<any>;

	readonly wasValidated: boolean;

	constructor(o: { entity: TKEntity; forPropertyName: string; });

	commit(): boolean;

	initWithEntityForPropertyName(owner: TKEntity, propertyName: string): this;

	validate(): boolean;
}

declare class TKEntityPropertyGroup extends NSObject {

	static alloc(): TKEntityPropertyGroup; // inherited from NSObject

	static new(): TKEntityPropertyGroup; // inherited from NSObject

	hidden: boolean;

	name: string;

	owner: TKEntity;

	readonly properties: NSArray<any>;
	[index: number]: TKEntityProperty;

	constructor(o: { name: string; properties: NSArray<any>; });

	constructor(o: { name: string; properties: NSArray<any>; orderByPropertyIndex: boolean; });

	addProperty(property: TKEntityProperty): void;

	initWithNameProperties(name: string, properties: NSArray<any>): this;

	initWithNamePropertiesOrderByPropertyIndex(name: string, properties: NSArray<any>, orderByPropertyIndex: boolean): this;

	insertPropertyAtIndex(property: TKEntityProperty, index: number): void;

	objectAtIndexedSubscript(index: number): TKEntityProperty;

	objectForKeyedSubscript(propertyName: string): TKEntityProperty;

	propertyAtIndex(index: number): TKEntityProperty;

	propertyWithName(name: string): TKEntityProperty;

	removeAllProperties(): void;

	removeProperty(property: TKEntityProperty): void;

	removePropertyAtIndex(index: number): void;
}

declare class TKEntityPropertyGroupEditorsView extends UIView {

	static alloc(): TKEntityPropertyGroupEditorsView; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupEditorsView; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupEditorsView; // inherited from NSObject

	readonly items: NSArray<any>;

	layout: TKLayout;

	addItem(item: UIView): void;

	addItemAtIndex(item: UIView, index: number): void;

	removeAllItems(): void;

	removeItem(item: UIView): void;

	updateLayout(): void;
}

declare const enum TKEntityPropertyGroupTitleIndicatorPosition {

	Left = 0,

	Right = 1
}

declare class TKEntityPropertyGroupTitleView extends UIView {

	static alloc(): TKEntityPropertyGroupTitleView; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleView; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupTitleView; // inherited from NSObject

	allowIndicatorAnimation: boolean;

	indicatorPosition: TKEntityPropertyGroupTitleIndicatorPosition;

	indicatorView: UIView;

	itemSpacing: number;

	readonly style: TKDataFormGroupTitleStyle;

	readonly titleLabel: TKLabel;
}

declare class TKEntityPropertyGroupTitleViewIndicator extends UIView {

	static alloc(): TKEntityPropertyGroupTitleViewIndicator; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupTitleViewIndicator; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupTitleViewIndicator; // inherited from NSObject

	fillColor: TKSolidFill;

	size: CGSize;

	strokeColor: TKStroke;
}

declare class TKEntityPropertyGroupView extends UIView {

	static alloc(): TKEntityPropertyGroupView; // inherited from NSObject

	static appearance(): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKEntityPropertyGroupView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKEntityPropertyGroupView; // inherited from UIAppearance

	static new(): TKEntityPropertyGroupView; // inherited from NSObject

	collapsible: boolean;

	readonly editorsContainer: TKEntityPropertyGroupEditorsView;

	readonly group: TKEntityPropertyGroup;

	readonly isCollapsed: boolean;

	titleView: TKEntityPropertyGroupTitleView;

	collapse(): void;

	expand(): void;
}

declare const enum TKEntityPropertyType {

	Unknown = 0,

	Numeric = 1,

	Integer = 2,

	Double = 3,

	Bool = 4,

	String = 5,

	Date = 6
}

declare class TKImageView extends UIImageView {

	static alloc(): TKImageView; // inherited from NSObject

	static appearance(): TKImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKImageView; // inherited from UIAppearance

	static new(): TKImageView; // inherited from NSObject
}

declare class TKLabel extends UILabel {

	static alloc(): TKLabel; // inherited from NSObject

	static appearance(): TKLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKLabel; // inherited from UIAppearance

	static new(): TKLabel; // inherited from NSObject

	textInsets: UIEdgeInsets;
}

declare class TKTextField extends UITextField {

	static alloc(): TKTextField; // inherited from NSObject

	static appearance(): TKTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKTextField; // inherited from UIAppearance

	static new(): TKTextField; // inherited from NSObject

	textInsets: UIEdgeInsets;
}

declare var TNSDataFormVersionNumber: number;

declare var TNSDataFormVersionString: interop.Reference<number>;
