import {
  NavigationSidebarHeadingLevel,
  NavigationSidebarPosition,
  NavigationSidebarVariation,
  NavigationVerticalMenuActiveIndicatorSize,
  NavigationVerticalMenuVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiNavigationVerticalMenu,
  DigiNavigationVerticalMenuItem,
} from "@digi/arbetsformedlingen-react";
import { StyledDigiNavigationSidebar } from "./styled/Navigation";
import { useNavigate } from "react-router-dom";

interface INavigationProps {
  closeMenu: () => void;
}

export const Navigation = ({ closeMenu }: INavigationProps) => {
  const navigate = useNavigate();

  const clickHome = () => {
    navigate("/");
    closeMenu();
  };

  const clickOccupation = () => {
    navigate("/sok-yrke");
    closeMenu();
  };

  const clickEducation = () => {
    navigate("/sok-utbildning");
    closeMenu();
  };
  return (
    <>
      <StyledDigiNavigationSidebar
        className="menu-div"
        afActive={true}
        afStickyHeader={true}
        afBackdrop={true}
        afPosition={NavigationSidebarPosition.END}
        afVariation={NavigationSidebarVariation.OVER}
        afCloseButtonText="Stäng"
        afHeadingLevel={NavigationSidebarHeadingLevel.H2}
        onAfOnClose={closeMenu}
        onAfOnBackdropClick={closeMenu}
      >
        <DigiNavigationVerticalMenu
          afVariation={NavigationVerticalMenuVariation.PRIMARY}
          afActiveIndicatorSize={
            NavigationVerticalMenuActiveIndicatorSize.PRIMARY
          }
          afAriaLabel="Menu"
        >
          <ul>
            <li>
              <DigiNavigationVerticalMenuItem
                af-text="Hem"
                onAfOnClick={clickHome}
              ></DigiNavigationVerticalMenuItem>
              <DigiNavigationVerticalMenuItem
                af-text="Sök Yrke eller Utbildning"
                af-active-subnav="false"
              ></DigiNavigationVerticalMenuItem>
              <ul>
                <li>
                  <DigiNavigationVerticalMenuItem
                    afText="Sök Yrke"
                    onAfOnClick={clickOccupation}
                  ></DigiNavigationVerticalMenuItem>
                </li>
                <li>
                  <DigiNavigationVerticalMenuItem
                    afText="Sök Utbildning"
                    onAfOnClick={clickEducation}
                  ></DigiNavigationVerticalMenuItem>
                </li>
              </ul>
            </li>
            <li>
              <DigiNavigationVerticalMenuItem
                afText="Om denna App"
                onAfOnClick={() => {
                  navigate("/om");
                  closeMenu();
                }}
              ></DigiNavigationVerticalMenuItem>
            </li>
          </ul>
        </DigiNavigationVerticalMenu>
      </StyledDigiNavigationSidebar>
    </>
  );
};
