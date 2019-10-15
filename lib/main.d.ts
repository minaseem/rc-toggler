declare module "toggler-react" {
    import * as React from "react";
    import {IProps, IState} from "../src/components/Toggler/Toggler";
    class Toggler extends React.Component<IProps, IState> {
        static Field: React.FC;
        static Popover: React.FC;
    }
    export default Toggler;
}
