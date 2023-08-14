import React, {useState} from "react";
import Decoration from "../../../assets/Decoration.svg";
import ReactPaginate from "react-paginate";
import "./_HomeOrganizations.scss";

const foundations = [

    {
        title: 'Fundacja “Dbam o Zdrowie”',
        description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
        title: 'Fundacja "Dla dzieci"',
        description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        items: 'ubrania, jedzenie'
    },
    {
        title: 'Fundacja "Bez domu"',
        description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        title: "Fundacja “Dbam o Zdrowie”",
        description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
        title: 'Fundacja "Dla dzieci"',
        description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        items: 'ubrania, jedzenie'
    },
    {
        title: 'Fundacja "Bez domu"',
        description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
        items: 'ubrania, jedzenie, ciepłe koce'
    },
    {
        title: "Fundacja “Dbam o Zdrowie”",
        description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
        items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
        title: 'Fundacja "Dla dzieci"',
        description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
        items: 'ubrania, jedzenie'
    },
    {
        title: 'Fundacja "Bez domu"',
        description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania',
        items: 'ubrania, jedzenie, ciepłe koce'
    },

]
const organisation = [
    {
        title: 'Organizacja “Lorem Ipsum 1”',
        description: 'Egestas, sed, tempus',
        items: 'Quis varius quam quiske it diam vel quamelementum puvinar.'
    },
    {
        title: 'Organizacja “Lorem Ipsum 2',
        description: 'ut, aliquam, purus, sit, amet',
        items: 'Henderit gravida rutrum quisque non telus orci ac auctor auque.'
    },
    {
        title: 'Organizacja “Lorem Ipsum 3',
        description: 'Mi, quis, henderit, dolor',
        items: 'Scerisque in dictum non consectetur a erat nam.'
    },
    {
        title: 'Organizacja “Lorem Ipsum 4”',
        description: 'Egestas, sed, tempus',
        items: 'Henderit gravida rutrum quisque non telus orci ac auctor auque.'
    },
    {
        title: 'Organizacja “Lorem Ipsum 5',
        description: 'ut, aliquam, purus, sit, amet',
        items: 'Quis varius quam quiske it diam vel quamelementum puvinar.'
    },
    {
        title: 'Organizacja “Lorem Ipsum 5',
        description: 'Mi, quis, henderit, dolor',
        items: 'Scerisque in dictum non consectetur a erat nam.'
    }
]
const local = [
    {
        title: 'Zbiórka “Lorem Ipsum 1',
        description: 'ut, aliquam, purus, sit, amet',
        items: 'Quis varius quam quiske it diam vel quamelementum puvinar.'
    },
    {
        title: 'Zbiórka “Lorem Ipsum 2 “',
        description: 'Mi, quis, henderit, dolor',
        items: 'Scerisque in dictum non consectetur a erat nam.'
    },
    {
        title: 'Zbiórka “Lorem Ipsum 3',
        description: 'Egestas, sed, tempus',
        items: 'Henderit gravida rutrum quisque non telus orci ac auctor auque.'
    }
]


const OrganizationsList = () => {
    const itemsOnPage = 3;
    const tabHeader = ["foundations", "organization", "local"]
    const [table, setTable] = useState(foundations)
    const [active, setActive] = useState("foundations")
    const [page, setPage] = useState(0)
    const numberOfPages = Math.ceil(table.length / itemsOnPage);
    const loadContent = page * itemsOnPage;


    const handleClick = (tabHeader) => {
        if (tabHeader === "foundations") {
            setTable(foundations)
            setActive(tabHeader)
        }
        if (tabHeader === "organization") {
            setTable(organisation)
            setActive(tabHeader)
        }
        if (tabHeader === "local") {
            setTable(local)
            setActive(tabHeader)
        }
    }

    const handlePageClick = ({selected}) => {
        setPage(selected)
    }

    const tabOpen = table.slice(loadContent, loadContent + itemsOnPage)

    const headerInfo = {
        foundations: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        organization: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        local: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }

    return (
        <div className="organizations" id="organizations">
            <div className="organizations__container">
                <h3 className="organizations__container-header">Komu pomagamy?</h3>
                <img className="organizations__container-decoration" src={Decoration} alt="fancy interline"/>
                <div className="container__tabs">
                    <button className="container__tabs-navi" onClick={() => handleClick(tabHeader[0])}>Fundacjom
                    </button>
                    <button className="container__tabs-navi" onClick={() => handleClick(tabHeader[1])}>Organizacjom
                       <br/> pozarządowym
                    </button>
                    <button className="container__tabs-navi" onClick={() => handleClick(tabHeader[2])}>Lokalnym
                       <br/> zbiórkom
                    </button>
                </div>
                {active === "foundations" ? (<span className="tabs__content">{headerInfo.foundations}</span>) : null}
                {active === "organization" ? (<span className="tabs__content">{headerInfo.organization}</span>) : null}
                {active === "local" ? (<span className="tabs__content">{headerInfo.local}</span>) : null}
            </div>
            <div className="tabs__content-col">
                {tabOpen.map(({id, title, description, items}) => (
                    <ul className="tabs__content-list" key={id}>
                        <li key={id} className="tabs__content-single">
                            <div className="tabs__content-box">
                                <div className="tabs__content-inside">
                                    <h3 className="tabs__content-title">{title}</h3>
                                    <span className="tabs__content-need">{items}</span>
                                    <h4 className="tabs__content-description">{description}</h4>
                               <hr/>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}
                <ReactPaginate pageCount={numberOfPages}
                               onPageChange={handlePageClick}
                               containerClassName={"pagination"}
                               pageLinkClassName={"pagination-link"}
                               breakClassName={"pagination-break"}
                               activeClassName={"pagination-active"}
                               previousLinkClassName={"pagination-hidden"}
                               nextLinkClassName={"pagination-hidden"}>

                </ReactPaginate>
            </div>
        </div>


    );
};

export default OrganizationsList;

