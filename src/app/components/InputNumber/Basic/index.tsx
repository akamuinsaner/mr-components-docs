import { InputNumber } from '@akamuinsaner/mr-components';

export default () => {

    const onChange = (e: any) => {
        console.log(e.target.value)
    }

    return (
        <InputNumber
            min={1}
            max={10}
            defaultValue={3}
            onChange={onChange}
            step={3}
        />
    )
}
