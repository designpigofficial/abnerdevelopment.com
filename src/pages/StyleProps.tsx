import { Box, Text, Flex, Grid } from "@chakra-ui/react";

function StyleProps() {
  return (
    <>
      {/* background image but use both tags and place page content in between */}

      <Box
        bgImage="./bg.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      />

      {/* m={2} refers to "theme.space[2]" */}

      {/* also colors can be bg='blue' */}

      <Box
        boxSize="sm"
        m={2}
        color={"red.50"}
        bgImage="./bg.jpg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        sm
      </Box>
      <Box
        boxSize="sm"
        m={2}
        color={"red.50"}
        bg={"rgba(123,0,0,0.6)"}
        boxShadow="xl"
        rounded="md"
      >
        sm
      </Box>
      <Box boxSize="md" m={2} color={"red.50"} bg={"rgba(0,0,0,0.2)"}>
        md
      </Box>
      <Box boxSize="lg" m={2} color={"red.50"} bg={"rgba(0,0,0,0.3)"}>
        lg
      </Box>
      <Box boxSize="xl" m={2} color={"red.50"} bg={"rgba(0,0,0,0.4)"}>
        xl
      </Box>
      <Box w="full" h="200px" m={2} color={"red.50"} bg={"rgba(0,0,0,0.4)"}>
        full
      </Box>
      <Box
        maxW="80%"
        minH="200px"
        m={2}
        color={"red.50"}
        bg={"rgba(0,0,0,0.4)"}
      >
        responsive
      </Box>

      {/* Flex verbose */}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        minH="400px"
        bg="red"
      >
        Flex Box
      </Box>
      {/* Flex shorthand */}

      <Flex align="center" justify="center" minH="400px" bg="blue">
        Flex Box
      </Flex>

      {/* Grid shorthand */}

      <Grid gap={2} autoFlow="row-dense">
        Grid
      </Grid>

      <Text
        bgGradient={"linear(to-t, greem.200, pink.500)"}
        bgClip={"text"}
        fontSize={"6xl"}
        fontWeight={"extrabold"}
      >
        Hello there...
      </Text>
    </>
  );
}

export default StyleProps;
