import Block, {BlockProps} from '../../Block';

export default {
    title: 'UI/Block',
    component: Block,
    argTypes: {
        variant: {type: {required: true}, control: 'select',
            options: [
                'card', undefined
            ]},
        classes: {control: 'text'},
        align: {type: {required: true}, control: 'select',
            options: [
                'center', 'flex-start',  'flex-end',
            ]},
        justify: {type: {required: true}, control: 'select',
            options: [
                'center', 'flex-start',  'flex-end',
                'space-between', 'space-around',  'space-evenly',
            ]},
        column: {control: 'boolean'},
        size: {type: {required: true}, control: 'select',
            options: [
                's', 'm',  'l', 'xl',
            ]},
        style: {control: 'object'},
        stretch: {control: 'boolean'}
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
    stretch={args.stretch}
>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
        >1</Block>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
        >2</Block>
</Block>;


export const Row = TemplateRow.bind({});
Row.args = {
    size: '500',
    align: 'center',
    justify: 'space-between',
    stretch: false
};
