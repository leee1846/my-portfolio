import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Styled from "styled-components";

export default function main() {
  const router = useRouter();

  useEffect(() => {
    router.push("/about");
  }, []);

  return <></>;
}

const Tests = Styled.div`
  font-size:40px;
  color:red;
`;
