import styled from 'styled-components'

export const CommentDiv = styled.div`
    width: 100%;
    display: flex;
    margin: 10px;
    flex-direction: row;
    border-radius: 10px;

    img {
        margin: 5px;
        padding: 5px;
        flex: 0;
        margin-bottom: 10px;
        width: 100px;
        height: auto;
        border-radius: 10px;
    }

    .comment-body {
        padding: 5px;
        flex: 1;
        font-size: 14px;

        .user {
            font-size: 20px;
            justify-content: space-between; 
        }
        .comment-text {
            color: #a4a8a5;
        }
        .comment-reaction {
            span {
                text-transform: uppercase;
                margin: 5px;
                :hover {
                    color: blue;
                    cursor: pointer;
                }
            }
        }
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        button {
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            outline: none;
            border: none;
            border-radius: 5px;
            :hover {
                background-color: #f2f2f2;
            }
        }
    }
`