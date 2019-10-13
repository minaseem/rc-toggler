/* created by imamudin on 11/12/18 */
import React from "react";

function hasParentChildRelationship(parent: HTMLElement | React.RefObject<HTMLElement> | null, child: HTMLElement | null): boolean {
    if (!child || child === document.body) return false;
    if (child === parent) return true;
    return hasParentChildRelationship(parent, child.parentElement);
}

export default hasParentChildRelationship;

