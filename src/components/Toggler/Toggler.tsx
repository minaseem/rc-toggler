/* created by imamudin on 06/12/18 */
import React, { Component, ReactNode } from "react";
import "./Toggler.less";
import clickEvent from "./../../helpers/clickEvent";
import hasParentChildRelationship from "./../../utils/hasParentChildRelationship";
import { IObject } from "../../types/types";

interface IProps {
  popoverVisible: boolean;
  onToggle: (a: boolean) => void;
  overrideClass?: string;
  children: ReactNode;
}

interface IState {
  showPopover: boolean;
}

/**
 * @return {null}
 */
function Field() {
  return null;
}

/**
 * @return {null}
 */
function Popover() {
  return null;
}

export default class Toggler extends Component<IProps, IState> {
  static Field: React.FC = Field;
  static Popover: React.FC = Popover;
  private field: React.RefObject<HTMLDivElement>;
  private windowClickSubscription: { remove: Function };
  static defaultProps: IObject;

  constructor(props: IProps) {
    super(props);
    this.onWindowClick = this.onWindowClick.bind(this);
    this.onFieldClick = this.onFieldClick.bind(this);
    this.windowClickSubscription = {
      remove: () => { }
    };
    this.field = React.createRef();
    this.state = {
      showPopover: false
    };
  }

  static getDerivedStateFromProps(nextProps: IProps, state: IState) {
    if (nextProps.popoverVisible !== state.showPopover) {
      return { showPopover: nextProps.popoverVisible };
    } else return {};
  }

  componentDidMount() {
    this.windowClickSubscription = clickEvent.subscribe(
      this.onWindowClick
    );
  }

  componentWillUnmount() {
    this.windowClickSubscription.remove();
  }

  onWindowClick(event: React.MouseEvent) {
    //hide popover
    const { showPopover } = this.state;
    if (
      showPopover &&
      !hasParentChildRelationship(
        this.field.current,
        event.target as HTMLElement
      )
    ) {
      this.props.onToggle(false);
      this.setState({
        showPopover: false
      });
    }
  }

  onFieldClick() {
    const { showPopover } = this.state;
    //toggle popover
    this.props.onToggle(!showPopover);
  }

  render() {
    const { children = [], overrideClass } = this.props;
    const { showPopover } = this.state;
    const field = (children as JSX.Element[]).find(
      (child: JSX.Element) =>
        child.type === Toggler.Field ||
        child.type.displayName === Toggler.Field.name
    );
    const popover = (children as JSX.Element[]).find(
      (child: JSX.Element) =>
        child.type === Toggler.Popover ||
        child.type.displayName === Toggler.Popover.name
    );
    return (
      <div className={`toggler ${overrideClass}`}>
        {field && (
          <div className="field" onClick={this.onFieldClick} ref={this.field}>
            {field.props.children}
          </div>
        )}
        {showPopover && popover && (
          <div className={'popover'} onClick={event => event.stopPropagation()}>
            {popover.props.children}
          </div>
        )}
      </div>
    );
  }
}


Toggler.defaultProps = {
  overrideClass: ""
};
