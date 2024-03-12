// @ts-check

/**
 * controlValue에 들어가는 type 정의
 * @typedef { ( 'radio' | 'inline-radio' | 'check' | 'inline-check' | 'select' | 'multi-select' ) } OptionsControlType
 * @typedef { ( 'array' | 'boolean' | 'color' | 'date' | 'number' | 'range' | 'object' | OptionsControlType | 'text' ) } ControlType
 */

/**
 * Object type 'ControlConfig'의 interface 정의
 * @typedef { Object } ControlConfig
 * 그냥 쓴 거: 필수 property
 * @prop { ControlType } type
 * 대괄호 친 거: optional property
 * @prop { string } [accept]
 * @prop { { [option: string]: string } } [labels]
 * @prop { number } [max]
 * @prop { number } [min]
 * @prop { string[] } [presetColors]
 * @prop { number } [step]
 */

/**
 * Storybook config 객체의 argTypes property 내 각 property(argument)의 값으로 들어가는 control config 객체를 내보내는 함수
 * @param { ( ControlType | ControlConfig | false ) } [control] Control config 객체 내부의 control property 값
 * @returns { { [ control: string ]: ( ControlType | ControlConfig | false ) } } Storybook config 객체의 argTypes property 내 각 property(argument)의
 * 값으로 들어가는 control config 객체
 */
export const createArgTypesControl = (control = 'text') => ({ control });
