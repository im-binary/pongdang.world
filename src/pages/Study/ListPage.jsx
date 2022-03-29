import React from "react";
import { useSelector } from "react-redux";
import ListTypeA from "../../components/ListType/ListTypeA";
import ListTypeB from "../../components/ListType/ListTypeB";
import ListTypeButton from "../../components/Button/ListTypeButton";

function ListPage() {
  const isLongList = useSelector(({ listType }) => listType === "A");

  return (
    <>
      <ListTypeButton />
      {isLongList ? <ListTypeA /> : <ListTypeB />}
    </>
  );
}

export default ListPage;
