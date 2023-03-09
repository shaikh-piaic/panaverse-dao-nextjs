import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import React from "react";
import ai from "../public/ai.jpg";
import iot from "../public/iot.jpg";
import bcc from "../public/bcc.jpg";
import cnc from "../public/cnc.jpg";
import gab from "../public/gab.jpg";
import npa from "../public/npa.jpg";
import Link from "next/link";
interface Card {
	Title: string;
	Img: StaticImageData;
}
const CourseCard = ({ Title, Img }: Card) => {
	return (
		<Card
			direction={"column"}
			maxW='sm'
			minH={"350px"}
			textAlign={"center"}
			my={"auto"}>
			<Image
				src={Img.src}
				w='500px'
				h='200px'
				alt={Title}
				borderTopRadius={"md"}
			/>
			<CardHeader my={"auto"}>
				<Heading size={[null, null, "md", "md"]} mt={4} fontWeight={"light"}>
					{Title}
				</Heading>
			</CardHeader>
		</Card>
	);
};
const Program = () => {
	return (
		<>
			{/* <Box as='main' w='100%'> */}
			<Container w={"100%"} maxW={"8xl"} mx={"auto"}>
				<Flex flexDir={"column"} alignItems={"center"} mx={"auto"} px='10'>
					<Box as='section' mx={[null, null, 14, null]}>
						<Text
							mt={"4"}
							mb={"4"}
							textAlign={"center"}
							fontSize={["xl", "2xl", "3xl", "4xl"]}
							fontWeight={["medium", "semibold", "bold", "extrabold"]}>
							Specialized Tracks
						</Text>
						<Grid
							mb={5}
							templateColumns={[
								"repeat(1, 1fr)",
								"repeat(1, 1fr)",
								"repeat(2, 1fr)",
								"repeat(3, 1fr)",
							]}
							gap={4}>
							<GridItem>
								<Link href={"/ai"}>
									<CourseCard
										Title='Artificial Intelligence and Deep Learning'
										Img={ai}
									/>
								</Link>
							</GridItem>
							<GridItem>
								<Link href={"/iot"}>
									<CourseCard Title='Ambient Computing and IoT' Img={iot} />
								</Link>
							</GridItem>
							<GridItem>
								<Link href={"/cnc"}>
									<CourseCard Title='Cloud-Native Computing' Img={cnc} />
								</Link>
							</GridItem>
							<GridItem>
								<Link href={"/bcc"}>
									<CourseCard
										Title='Web 3.0 (Blockchain) and Metaverse'
										Img={bcc}
									/>
								</Link>
							</GridItem>
							<GridItem>
								<Link href={"/gab"}>
									<CourseCard Title='Genomics and Bioinformatics' Img={gab} />
								</Link>
							</GridItem>
							<GridItem>
								<Link href={"/npa"}>
									<CourseCard
										Title='Network Programmability and Automation'
										Img={npa}
									/>
								</Link>
							</GridItem>
						</Grid>
					</Box>
				</Flex>
			</Container>
			{/* </Box> */}
		</>
	);
};

export default Program;
