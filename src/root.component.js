import { auth$ } from "@nitex/utility";
// import { useState } from "react";
export default function Root(props) {
  // const [authdetail, setAutheDetail] = useState();
  auth$.subscribe(({ sessionToken }) => {
    // eslint-disable-next-line no-console
    console.log(sessionToken);
    // setAutheDetail(JSON.stringify(sessionToken));
  });
  return <section>{props.name} is mounted!</section>;
}
