import * as S from './styled';

type CoffeeFeatureType = {
    description: string;
    color: string;
    icon: () => JSX.Element
}

export const CoffeeFeature = ({ description, color, icon: IconElement }: CoffeeFeatureType ) => {
    return(
        <S.Container>
            <S.TextContainer customColor={color}>
                <IconElement />
            </S.TextContainer>
            {description}
        </S.Container>
    )
}