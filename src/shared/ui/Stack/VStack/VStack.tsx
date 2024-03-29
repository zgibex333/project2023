import Flex, { FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex {...props} direction="column" {...props} align={align} />;
};

export default VStack;
