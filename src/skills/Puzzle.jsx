//libraries
import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
//puzzle



export default function Puzzle(props) {
        const numOfPuzzle = []
        for (let i = 0; i < props.rating; i++){
            numOfPuzzle.push(<img src={props.puzzle} alt="" className="puzzle"/>)
        }

    return (
        <>
            {
                numOfPuzzle
            }
        </>
    )
}
