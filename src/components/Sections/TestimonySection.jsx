import React from "react";

const TestimonySection = () => {
  return (
    <>
      <div className="uk-container">
        <div className="uk-slider-container-offset" data-uk-slider>
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex={-1}
          >
            <ul className="uk-slider-items uk-child-width-1-2@m uk-grid">
              <li>
                <div className="uk-card uk-card-small uk-card-default">
                  <div className="uk-card-body">
                    <p>
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt.&quot;
                    </p>
                  </div>
                  <div className="uk-card-footer uk-card-small">
                    <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                      <div className="uk-width-auto">
                        <img
                          className="uk-border-circle"
                          width={40}
                          height={40}
                          src="images/avatar.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div>
                        <p className="uk-card-title uk-margin-remove-bottom">
                          Title
                        </p>
                        <p className="uk-margin-remove-top">Tulisan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default uk-text-center">
                  <div className="uk-card-body">
                    <div className="uk-width-auto">
                      <img
                        className="uk-border-circle"
                        width={40}
                        height={40}
                        src="/img/kelapa-2.png"
                        alt="Avatar"
                      />
                    </div>
                    <h3 className="uk-card-title">Headline 2</h3>
                    <p>
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt.&quot;
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-body uk-text-center">
                    <h3 className="uk-card-title uk-text-center">Headline</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Headline</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">Headline</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover tester"
              href=""
              data-uk-slidenav-previous
              data-uk-slider-item="previous"
            />
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover tester"
              href=""
              data-uk-slidenav-next
              data-uk-slider-item="next"
            />
          </div>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
        </div>
      </div>
    </>
  );
};

export default TestimonySection;
