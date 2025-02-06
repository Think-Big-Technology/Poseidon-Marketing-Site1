/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../component/common/ScrollToTop";

const Wrapper = ({ children }: any) => {

    return <>
        {children}
        <ScrollToTop />
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
