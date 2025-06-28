import useCounter from '~/hooks/useCounter';
import { Container, Title, Value, ButtonGroup, Button } from '~/styles/StyledCounter';

const Counter = () => {
    const { value, incr, decr, reset } = useCounter({ start: 5, by: 2 });

    return (
        <Container>
            <Title>Counter</Title>
            <Value>{value}</Value>
            <ButtonGroup>
                <Button onClick={incr}>Incrémenter</Button>
                <Button onClick={decr}>Décrémenter</Button>
                <Button onClick={reset}>Réinitialiser</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Counter;
