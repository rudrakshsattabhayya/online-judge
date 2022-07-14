import {makeStyles} from "@mui/styles"

const useStyles = makeStyles((theme) => ({
   page: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    padding: '4rem 0 0 2rem'
   },
   leftpage: {
    display: 'grid'
   },
   title: {
    textAlign: 'center',
    marginBottom: '3rem'
   },
   prob_statement: {
    textAlign: 'left'
   }
}));

export default useStyles;