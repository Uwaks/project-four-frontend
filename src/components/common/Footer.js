import React from 'react'

function Footer() {
  return (
  // <div className="text-is-center">
  //   <footer><a href="https://github.com/Uwaks" rel="noreferrer" target="_blank">Nnanna Uwakwe</a> and <a href="https://github.com/MaggieLiz" rel="noreferrer" target="_blank">Maggie Ward</a></footer>
  // </div>

    <div className="footer-dark">
      <hr />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="https://github.com/Uwaks" rel="noreferrer" target="_blank">Nnanna</a></li>
                <li><a href="https://github.com/MaggieLiz" rel="noreferrer" target="_blank">Maggie</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>SWAPxSHOP</h3>
              <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
            </div>
            <div className="col item social"><a href="#"><i className="fab fa-facebook-f"></i></a><a href="#"><i className="fab fa-twitter"></i></a><a href="#"><i className="fab fa-linkedin-in"></i></a><a href="#"><i className="fab fa-instagram"></i></a></div>
          </div>
          <p className="copyright">SWAPxSHOP © 2021</p>
        </div>
      </footer>
    </div>



  )
}

export default Footer
