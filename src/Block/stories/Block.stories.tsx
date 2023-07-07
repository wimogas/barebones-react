import '../../style.css'

import Block, {BlockProps} from '../../Block';

export default {
    title: 'UI/Block',
    component: Block,
    argTypes: {
        variant: {type: {required: true}, control: 'select',
            options: [
                'card'
            ]},
        classes: {control: 'text'},
        justify: {control: 'text'},
        align: {control: 'text'},
        flex: {control: 'text'},
        column: {control: 'boolean'},
        size: {type: {required: true}, control: 'select',
            options: [
                's', 'm',  'l', 'xl',
            ]},
        style: {control: 'object'},
    }
};

const TemplateRow: React.FC<BlockProps> = (args) => <Block
    variant={args.variant}
    style={args.style}
    classes={args.classes}
    size={args.size}
    column={args.column}
    align={args.align}
    justify={args.justify}
    flex={args.flex}
>
    <Block
        flex={'1'}
        style={{
            "backgroundColor":"var(--color-primary-darker)",
            "padding" : "12px",
            "borderRadius" : "6px",
        }}>1</Block>
    <Block
        flex={'1'}
        style={{
            "backgroundColor":"var(--color-primary-darker)",
            "padding" : "12px",
            "borderRadius" : "6px"
        }}>2</Block>
</Block>;


export const Row = TemplateRow.bind({});
Row.args = {
    size: 's',
    align: 'center',
    justify: 'space-between'
};
