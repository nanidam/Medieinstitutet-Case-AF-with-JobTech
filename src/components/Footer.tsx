import { Link } from "react-router-dom";
import "/logo-03.png";
import { LinkVariation } from "@digi/arbetsformedlingen";
import { DigiLink } from "@digi/arbetsformedlingen-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <span className="dot">•</span> {/* Dot separator */}
        <Link to="/om">Om</Link>
        <span className="dot">•</span> {/* Dot separator */}
        <DigiLink
          afHref="https://github.com/Medieinstitutet/case-f-r-arbetsf-rmedlingen-och-jobtech-grupp-9-1"
          afVariation={LinkVariation.SMALL}
          afTarget="_blank"
        >
          GitHub
        </DigiLink>
      </div>
      <div className="copyright-container">
        <p className="copyright">© All rights reserved 2023</p>
      </div>
    </footer>
  );
}
