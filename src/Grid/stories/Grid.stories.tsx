import Block, {BlockProps} from '../../Block';
import Grid, {GridProps} from '../../Grid';

export default {
    title: 'UI/Grid',
    component: Grid
};

const TemplateGrid: React.FC<GridProps> = (args) => <Grid>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
        >1</Block>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
        >2</Block>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
    >3</Block>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
    >4</Block>
    <Block
        justify={'center'}
        classes={'bb-background-08 bb-p-300 bb-border-radius-500 bb-white'}
    >5</Block>
</Grid>;


export const Responsive = TemplateGrid.bind({});

