import Footer from "./footer";
import CategoryBar from "./categoryBar";
import TopBar from "./topBar";

export default function Shop({ children }): JSX.Element {
    return (
        <div className="flex h-screen justify-center items-center bg-syl-grey">
            <div className="w-11/12 bg-syl-white">
                <div className="border-3">
                    <TopBar />
                    <CategoryBar />
                    <br/>
                    <main>{children}</main>
                    <br/>
                    <br/>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
