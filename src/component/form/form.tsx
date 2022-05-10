
import { FC, memo, useCallback } from "react";
import { testApp } from "../../server";
import { Button } from "../button";
import { Column } from "../column";
import { Whitespace } from "../spacing";
import { Input, Label } from "./form.styles";

export const Form: FC = memo(() => {
    console.log(123)
    const testAppFunction = useCallback(() => {
        testApp()
    }, [])
    return (
        <Column>
            <form>
                <>
                    <Label>
                        Login
                        <Input />
                        <Whitespace interval={100} />
                        Password
                        <Input />
                    </Label>
                    <Button onClickButton={testAppFunction} text="Отправить" />
                </>
            </form>
        </Column>
    );
})