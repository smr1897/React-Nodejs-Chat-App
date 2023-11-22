import React from "react";
import { Link } from "react-router-dom";
import { Box , Flex , Button , Stack } from "@chakra-ui/react";
import Logo from "../UI/Logo";

import { CloseIcon , MenuIcon } from ".../Icons";

const MenuItems = (props) => {

    const { children , isLast , to = "/" , ...rest } = props;

    return(

        <Text
            mb = {{ base : isLast ? 0 : 8 , sm : 0}}
            mr = {{ base : 0 , sm : isLast ? 0 : 8}}
            display = "block"
            {...rest}
        >
            <Link to = {to} > { children }</Link>

        </Text>

    )

}

