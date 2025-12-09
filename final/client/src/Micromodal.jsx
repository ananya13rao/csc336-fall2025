import {useEffect } from 'react'; 

function ModalAdd() {
    useEffect(() => {
        window.MicroModal.init(); 

} , []);

return (
    <div>
    <div className="modal micromodal-slide" id="task-type-modal" aria-hidden="true">
    <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
      <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="review-title">
        <header className="modal__header">
          <h2 id="review-title">Types of Tasks <span className="badge"> </span></h2>
          <button className="modal__close" aria-label="Close" data-micromodal-close>✕</button>
        </header>
        <main className="modal__content" id="review-content">
          
        </main>
        <footer className="modal__footer">
          <button className="btn" data-micromodal-close>Close</button>
        </footer>
      </div>
    </div>
  </div>
  </div>




);
}

export default ModalAdd; 