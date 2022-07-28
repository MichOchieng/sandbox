import { useState } from "react"

interface Card {
    id: number;
    url: string;
    title: string;
}

interface Props {
    data:Array<Card>;
}

export const ExpandingGallery = ({data}:Props) => {
    const [activeCard,setActiveCard] = useState<number>(1);
    const onClick = (id: number) => setActiveCard(id);

    const cardOn  = "flex items-center justify-center w-5/6 mx-2 rounded-xl transition-all ease-in-out"
    const cardOff = "flex w-1/6 mx-2 rounded-xl transition-all ease-in-out"

    return(
        <div
            className="flex flex-row h-96 w-full"
        >
            {
                data.map(card =>(
                    <div
                        key={card.id}
                        className={(activeCard === card.id ) ? cardOn : cardOff}
                        onClick={() => onClick(card.id)}
                        style={{backgroundImage: `url(${card.url})`}}
                    >
                        {(activeCard === card.id )  && <h2 className="cardText">{card.title}</h2>}
                    </div>
                ))
            
            }
        </div>
    )
}