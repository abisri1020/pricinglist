import "./App.css";
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
export default function App() {

    const fea1 = ['Single User', '5GB storage', 'Unlimited public projects', 'Community access', 'No private projects', 'No phone support', 'No subdomain'];
    const fea2 = ['5 User', '50GB storage', 'Unlimited public projects', 'Community access', 'Unlimited private projects', 'Dedicated phone support', 'Free subdomain'];
    const fea3 = ['Unlimited User', '150GB storage', 'Unlimited public projects', 'Community access', 'Unlimited private projects', 'Dedicated phone support', 'Unlimited free subdomain'];
    return ( <
        div className = "App" >
        <
        Package plan = "FREE"
        price = "0 $"
        feature = { fea1 }
        / > <
        Package plan = "PLUS"
        price = "9 $"
        feature = { fea2 }
        / > <
        Package plan = "PRO"
        price = "49 $"
        feature = { fea3 }
        / > < /
        div >
    );
}

function Package({ plan, price, feature }) {

    return ( <
            Card className = "card" >
            <
            CardContent >
            <
            h3 className = "pln" > { plan } < /h3><p> <
            span className = "pri" > { price } < /span>/
            month < /p > <
            Divider /
            >

            {
                feature.map(item => ( < p className = "fea" > < DoneIcon size = "small" / > { item } < /p > ))
                    } <
                    Button variant = "contained"
                    className = "btn" > Buy plan < /Button>< /
                    CardContent >
                    <
                    /
                    Card >
                );
            }