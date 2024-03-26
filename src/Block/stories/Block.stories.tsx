import Block, {BlockProps} from '../../Block';

export default {
    title: 'COMPONENTS/Block',
    component: Block,
    argTypes: {
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
        style: {control: 'object'},
        stretch: {control: 'boolean'},
    }
};

const TemplateRow: React.FC<BlockProps> = (args) => <Block
    style={args.style}
    classes={args.classes}
    column={args.column}
    align={args.align}
    justify={args.justify}
    flex={args.flex}
    stretch={args.stretch}
>
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
        >1</Block>
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
        >2</Block>
</Block>;

const Template: React.FC<BlockProps> = (args) => <Block
    style={args.style}
    classes={args.classes}
    column={args.column}
    align={args.align}
    justify={args.justify}
    flex={args.flex}
    stretch={args.stretch}
>
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
    >1</Block>
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
    >2</Block>
</Block>;

const TemplateCard: React.FC<BlockProps> = (args) => <Block
    style={args.style}
    classes={args.classes}
    column={args.column}
    align={args.align}
    justify={args.justify}
    flex={args.flex}
    stretch={args.stretch}
>
    <Block
    >1</Block>
</Block>;


export const Row = Template.bind({});
Row.args = {
    align: 'center',
    justify: 'space-between',
    stretch: false
};

export const Column = Template.bind({});
Column.args = {
    align: 'stretch',
    column: true,
    style: {
        "gap" : "14px"
    }
};

export const Custom = TemplateCard.bind({});
Custom.args = {
    align: 'stretch',
    column: true,
    style: {
        "border" : "1px solid #000",
        "borderRadius" : "4px",
        "padding" : "20px"
    }
};
