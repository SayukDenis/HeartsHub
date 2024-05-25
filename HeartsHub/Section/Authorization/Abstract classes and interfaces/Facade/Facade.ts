import AddPasswordPageFabric from "../../Authorization carousel pages/Add Password page/AddPasswordPageFabric";
import AlcoholStatusPageFabric from "../../Authorization carousel pages/Alcohol status page/AlcoholStatusPageFabric";
import AskAboutChildrenPageFabric from "../../Authorization carousel pages/Children status page/AskAboutChildrenPageFabric";
import ChoosePhotoPageFabric from "../../Authorization carousel pages/Choose photo page/ChoosePhotoPageFabric";
import EnterNameAndSurnamePageFabric from "../../Authorization carousel pages/Enter name and surname page/EnterNameAndSurnamePageFabric";
import EnteringBirthdayPageFabric from "../../Authorization carousel pages/Entering a birthday page/EnteringBirthdayPageFabric";
import EnteringAnEmailAddressPageFabric from "../../Authorization carousel pages/Entering an email address page/EnteringAnEmailAddressPageFabric";
import EnteringYourGenderPageFabric from "../../Authorization carousel pages/Entering your gender page/EnteringYourGenderPageFabric";
import EnteringYourHeightPageFabric from "../../Authorization carousel pages/Entering your height page/EnteringYourHeightPageFabric";
import SearchStatusPageFabric from "../../Authorization carousel pages/Finding status/SearchStatusPageFabric";
import IntroductionOfSexualOrientationPageFabric from "../../Authorization carousel pages/Introduction of sexual orientation page/IntroductionOfSexualOrientationPageFabric";
import LanguageStatusPageFabric from "../../Authorization carousel pages/Language status page/LanguageStatusPageFabric";
import SelfInformationPageFabric from "../../Authorization carousel pages/Self inforomation page/SelfInformationPageFabric";
import SmokeStatusPageFabric from "../../Authorization carousel pages/Smoke status page/SmokeStatusPageFabric";
import SupportPageFabric from "../../Authorization carousel pages/Support page/SupportPageFabric";
import VerifyCodePageFabric from "../../Authorization carousel pages/Verify code page/VerifyCodePageFabric";
import { FabricOfRegistrationPages } from "../Fabric method/FabricMethod";
import { AdaptedRegistrationPage } from "../Template method/AdaptedRegistrationPage";
import SearchSettingsFabric from "../../Authorization carousel pages/Search settings/SearchSettingsFabric";
import LocationPageFabric from "../../Authorization carousel pages/Location Page/LocationPageFabric";
import AddNewPasswordPageFabric from "../../Authorization carousel pages/Add New Password Page/AddNewPasswordPageFabric";

class Facade {
    private createPages = (pageFabrics: FabricOfRegistrationPages[]): AdaptedRegistrationPage[] => {
        const registrationPages: AdaptedRegistrationPage[] = [];
        let index = 0;
        for (const page of pageFabrics) {
            registrationPages.push(page.createAdaptivePage(index++));
        }
        return registrationPages;
    };

    getRegistrationPages = (): AdaptedRegistrationPage[] => {
        const pageFabrics: FabricOfRegistrationPages[] = [
            new EnteringAnEmailAddressPageFabric(),
            new VerifyCodePageFabric(),
            new EnterNameAndSurnamePageFabric(),
            new EnteringBirthdayPageFabric(),
            new EnteringYourGenderPageFabric(),
            new IntroductionOfSexualOrientationPageFabric(),
            new EnteringYourHeightPageFabric(),
            new AskAboutChildrenPageFabric(),
            new AlcoholStatusPageFabric(),
            new SmokeStatusPageFabric(),
            new LanguageStatusPageFabric(),
            new SearchStatusPageFabric(),
            new SearchSettingsFabric(),
            new LocationPageFabric(),
            new SelfInformationPageFabric(),
            new ChoosePhotoPageFabric(),
        ];

        return this.createPages(pageFabrics);
    };

    getBasicRegistrationPages = (): AdaptedRegistrationPage[] => {
        const pageFabrics: FabricOfRegistrationPages[] = [
            new EnterNameAndSurnamePageFabric(),
            new EnteringBirthdayPageFabric(),
            new EnteringYourGenderPageFabric(),
            new SelfInformationPageFabric(),
        ];

        return this.createPages(pageFabrics);
    };

    getAllAboutYouRegistrationPages = (): AdaptedRegistrationPage[] => {
        const pageFabrics: FabricOfRegistrationPages[] = [
            new IntroductionOfSexualOrientationPageFabric(),
            new EnteringYourHeightPageFabric(),
            new AskAboutChildrenPageFabric(),
            new AlcoholStatusPageFabric(),
            new SmokeStatusPageFabric(),
        ];

        return this.createPages(pageFabrics);
    };

    getSearchSettingsRegistrationPages = (): AdaptedRegistrationPage[] => {
        const pageFabrics: FabricOfRegistrationPages[] = [
            new SearchStatusPageFabric(),
            new SearchSettingsFabric(),
            new LocationPageFabric(),
        ];

        return this.createPages(pageFabrics);
    };

    getSecuritySettingsRegistrationPages = (): AdaptedRegistrationPage[][] => {
        const pageFabrics1: FabricOfRegistrationPages[] = [
            new EnteringAnEmailAddressPageFabric(),
            new VerifyCodePageFabric(),
        ];
        const pageFabrics2: FabricOfRegistrationPages[] = [
            new AddPasswordPageFabric(),

        ];
        const pageFabrics3: FabricOfRegistrationPages[] = [
            new SupportPageFabric(),
        ];
        const pageFabrics4: FabricOfRegistrationPages[] = [
            new AddNewPasswordPageFabric(),
            new AddPasswordPageFabric(),
        ]
        const result: AdaptedRegistrationPage[][] = [];
        result.push(this.createPages(pageFabrics1));
        result.push(this.createPages(pageFabrics2))
        result.push(this.createPages(pageFabrics3));
        result.push(this.createPages(pageFabrics4));
        return result;
    };
}

export default Facade;