/*
 * @Author: XJN
 * @Date: 2023-10-04 09:16:51
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-04 09:25:06
 * @FilePath: \demo\src\views\DemoNoLog\TodoList\style.ts
 * @Description: 
 * @前端实习生: 鲸落
 */
import styled from "styled-components";

export const TodoListStyled = styled.div`
    padding: 100px;

    ul{
        margin-left: 20px;
        list-style: none
    }

    .completed{
        text-decoration:line-through; 
    }

    label{
        padding-left: 10px;
    }
`