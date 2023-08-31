import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-2">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "20%", zIndex: 1 }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://i.ytimg.com/vi/5eNrovyYk7U/hqdefault.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="news_image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
