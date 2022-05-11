import React from "react";
import { Link } from "react-router-dom";

export default function TestPage() {
  return (
    <>
      <div> test page</div>
      <button>
        <Link to='hi'>얌</Link>
      </button>
      <button>
        <Link to='scrolltext'>scrolltext</Link>
      </button>
    </>
  );
}
