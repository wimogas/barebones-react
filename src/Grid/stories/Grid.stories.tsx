import Block, {BlockProps} from '../../Block';
import Grid, {GridProps} from '../../Grid';

export default {
    title: 'COMPONENTS/Grid',
    component: Grid
};

const TemplateGrid: React.FC<GridProps> = (args) => <Grid>
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
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
    >3</Block>
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
    >4</Block>
    <Block
        justify={'center'}
        style={{
            "background-color" : "#0D5D92",
            "padding" : "20px"
        }}
    >5</Block>
</Grid>;


export const Responsive = TemplateGrid.bind({});

