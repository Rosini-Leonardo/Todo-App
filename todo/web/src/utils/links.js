import React from "react";
import Switch from "../components/styled/Switch";

const links=[
    {
        key:1,
        id:'link-1',
        name:'About',
        href:'/about/',
    },
];

export const ListOfLinks = () =>{
    return(
        <React.Fragment>
            <section className="row link__center">
                <div className="col-6" id='dark-link'>
                    {
                        links.map((el,i)=>{
                            return(
                                <a
                                id={el.id}
                                key={el.key}
                                href={el.href}
                                className="text-decoration-none mob-links me-5"
                                >{el.name}
                                </a>
                        )})
                    }
                    {/* Dark Mode */}
                    <Switch/>
                </div>
            </section>
        </React.Fragment>
    )
};