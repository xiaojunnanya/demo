/*
 * @Author: XJN
 * @Date: 2023-10-03 19:48:44
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2023-10-03 21:11:53
 * @FilePath: \demo\src\views\Home\style.ts
 * @Description: 
 * @前端实习生: 鲸落
 */

import styled from 'styled-components'

export const HomeStyle = styled.div`
    display: flex;
    min-height: 100vh;
    

    .left{
        flex: 1;
        padding: 10px;

        .line-text {
            position: relative;
            text-align: center;
            margin-bottom: 10px;
        }

        .line-text::before,
        .line-text::after {
            content: "";
            display: inline-block;
            width: 50%;
            height: 1px;
            background-color: #ccc; /* 横线的颜色 */
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
        }

        .line-text::before {
            left: 0;
        }

        .line-text::after {
            right: 0;
        }

        .line-text span {
            display: inline-block;
            padding: 0 10px; /* 可根据需要调整文字和横线之间的间距 */
            background-color: #fff; /* 可根据需要调整文字背景色 */
            position: relative;
            z-index: 1;
            color: #686868;
        }

        .ant-card-body{
            cursor: pointer;
            text-align:center;
        }
        .ant-card-head-title{
            text-align:center;
            user-select: none;
        }
    }

    .right{
        width: 120px;
        background-color: #F2F6F9;
        text-align: center;
        padding-top: 10px;

        Button{
            margin-top: 200%;
        }

        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
    }
`