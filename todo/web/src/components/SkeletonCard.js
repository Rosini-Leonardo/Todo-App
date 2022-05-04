import React from "react";

export function SkeletonCard (props){
    return(
      <React.Fragment>
        <article className="card">
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <h5 className="card-subtitle mb-2 text-muted">{props.subtitle}</h5>
            <p className="card-text mt-3">{props.body}</p>
          </div>
        </article>
      </React.Fragment>
    )
};