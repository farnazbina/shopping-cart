import { Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import { productList } from '../data/items'

function Shop() {
    return (
        <Row xs={1} md={4} className="g-4" style={{paddingBottom: '90px'}}>
            {productList.map((item) => (
                <Col key={item.id} align='center'>
                    <ProductItem product={item} />
                </Col>
            ))}
        </Row>
    )
}

export default Shop;