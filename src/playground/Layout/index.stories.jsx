import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { boolean } from '@storybook/addon-knobs'

import {
  Stack,
  Icon,
  Text,
  TextLink,
  Drawer,
  Layout,
  Main,
  MainMenu,
  MenuDivider,
  MenuFooter,
  MenuItem,
  Title,
  Global,
  resetCSS,
  theme,
  ThemeProvider,
} from '../..'

export default {
  title: 'Playground | Layout',
  component: Layout,
  decorators: [
    story => (
      <ThemeProvider theme={theme}>
        <Global styles={resetCSS} />
        {story()}
      </ThemeProvider>
    ),
  ],
}

function Link({ children, ...props }) {
  return <TextLink {...props}>{children}</TextLink>
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

export function Default() {
  const collapsed = boolean('collapsed', false)

  const [active, setActive] = useState(0)
  const activate = useCallback(
    index => e => {
      e.preventDefault()
      setActive(index)
    },
    []
  )

  const menuIcons = ['documentnew', 'bell', 'web', 'calendar']

  return (
    <Layout>
      <Drawer collapsed={collapsed}>
        <MainMenu>
          {[0, 1, 2].map(index => (
            <MenuItem
              key={index}
              icon={
                menuIcons[index] ? <Icon name={menuIcons[index]} /> : undefined
              }
              active={active === index}
              as={Link}
              href="/"
              onClick={activate(index)}
            >
              Menu Item #{index + 1}
            </MenuItem>
          ))}
          <MenuDivider />
          {[3, 4, 5].map(index => (
            <MenuItem
              key={index}
              icon={
                menuIcons[index] ? <Icon name={menuIcons[index]} /> : undefined
              }
              active={active === index}
              as={Link}
              href="/"
              onClick={activate(index)}
            >
              Menu Item #{index + 1}
            </MenuItem>
          ))}
        </MainMenu>
        <MenuFooter>
          <MenuItem
            as={Link}
            href="/"
            icon={<Icon name="Settings" size="small" />}
          >
            Settings
          </MenuItem>
          <MenuItem as={Link} href="/" icon={<Icon name="Exit" size="small" />}>
            Logout
          </MenuItem>
        </MenuFooter>
      </Drawer>
      <Main gutter>
        <Title>Page #{active + 1}</Title>
        <LoremIpsum />
      </Main>
    </Layout>
  )
}

Default.story = {
  name: 'Default',
}

Default.parameters = {
  layout: 'fullscreen',
}

function LoremIpsum() {
  return (
    <Stack space={3}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        condimentum cursus magna ac semper. Nunc sodales felis massa, sit amet
        sollicitudin libero elementum vel. Duis vitae vestibulum sem, at
        lobortis odio. Phasellus quis consectetur est. Curabitur mi tortor,
        imperdiet eu massa eu, fermentum semper dui. Curabitur vel arcu
        tincidunt, fermentum velit vitae, pulvinar felis. Pellentesque sed
        congue lorem. In dapibus sollicitudin massa, aliquet hendrerit tortor
        porttitor vel. Ut tincidunt ultrices elit, in sollicitudin orci dictum
        vel.
      </Text>
      <Text>
        Nunc vitae felis vel eros varius gravida at interdum nunc. Sed egestas
        dolor eu nisl ornare interdum. Pellentesque eu elementum sapien, eget
        tristique nibh. Quisque velit lacus, commodo id fringilla eu, tempor id
        diam. Etiam commodo vehicula augue ut luctus. Nullam ante erat, tempor
        at dapibus id, efficitur laoreet nisi. In tincidunt aliquet mi, sed
        gravida dui convallis vel. Vivamus in tempus est. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Duis rutrum placerat libero et
        dignissim. Cras fermentum elit auctor, accumsan sem sed, congue sapien.
      </Text>
      <Text>
        Nam tempor ex a leo commodo, sit amet porta nunc efficitur. Nunc laoreet
        vel risus in fermentum. Nunc consectetur sapien et ipsum tincidunt
        fringilla. Donec eros mi, porttitor in eros non, scelerisque feugiat
        nisl. In non ultricies massa. Donec finibus velit et dignissim pharetra.
        Fusce at eros at dui molestie fermentum non ac sem. Pellentesque eu
        mauris tellus.
      </Text>
      <Text>
        Sed mollis vel dui id cursus. Sed posuere mollis nulla vitae viverra. In
        non finibus velit, dapibus accumsan magna. Mauris nibh neque, tempor id
        lacus ut, aliquet euismod diam. Suspendisse maximus quis justo eu
        elementum. Donec egestas consectetur nisl, vel laoreet diam. Ut vitae
        nisi sed elit finibus finibus maximus sit amet nisi.
      </Text>
      <Text>
        Ut sed neque lacus. In non leo id tellus pharetra gravida sed id odio.
        Cras posuere blandit magna nec accumsan. Integer eros leo, luctus
        scelerisque est sit amet, aliquet tincidunt orci. Maecenas quis sodales
        mauris. Morbi vestibulum nisi non orci accumsan, at mollis urna rutrum.
        Donec cursus vel dui ut sollicitudin. Nunc eget neque enim. Mauris
        auctor ante eget nisl rhoncus tristique. Proin quis lectus nunc. Sed
        placerat vestibulum tellus, id condimentum turpis gravida maximus.
      </Text>
      <Text>
        Nulla nec eros vitae lorem auctor porta vel eu ligula. Cras euismod eros
        ante, ut dignissim eros sagittis quis. Etiam semper libero metus, at
        consequat augue aliquet quis. Maecenas malesuada fermentum lobortis.
        Aliquam mollis laoreet velit quis auctor. Phasellus eget commodo nulla.
        Morbi et tincidunt urna, nec pulvinar nisi. Etiam tincidunt vel libero
        vel facilisis. Nullam sollicitudin porttitor urna. Donec et tellus non
        tellus tincidunt sollicitudin. In sagittis pellentesque magna nec
        maximus. Sed consectetur libero lacus, sit amet pharetra nibh dignissim
        et. Nulla congue diam ac nisi semper, quis hendrerit tortor feugiat.
        Aliquam ut elementum lorem, eget suscipit augue. Donec porttitor tempor
        sem et accumsan.
      </Text>
      <Text>
        Ut eget magna eget arcu tincidunt porttitor. Vestibulum in ligula id
        lectus lobortis imperdiet eu vel massa. Vivamus pharetra tortor et sem
        ullamcorper, at lacinia nisl tincidunt. Morbi turpis libero, semper quis
        tellus ut, faucibus sollicitudin augue. In hac habitasse platea
        dictumst. Morbi ligula ligula, aliquam et ipsum vitae, volutpat posuere
        ipsum. Curabitur dapibus hendrerit diam, vel finibus diam scelerisque
        eget. Nullam iaculis risus eget facilisis finibus.
      </Text>
      <Text>
        Quisque et mattis lectus. Vivamus consectetur ligula non est fringilla
        consectetur. Mauris scelerisque mauris lacus, id ullamcorper velit
        suscipit quis. Integer eget vulputate mauris. Vestibulum tincidunt
        vestibulum neque eu lobortis. Aliquam vehicula vel quam ac tempus.
        Maecenas vehicula, metus a porta finibus, orci justo cursus elit, eget
        volutpat orci ante venenatis ipsum. Fusce venenatis, diam sit amet
        auctor aliquam, magna erat auctor felis, id convallis urna purus nec
        libero. Donec in enim ac felis imperdiet blandit. Nulla id massa
        consectetur, cursus nisl et, cursus arcu. Sed id dui enim. Morbi id
        tellus ut diam facilisis ornare. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
        luctus, quam ac gravida rhoncus, eros neque faucibus ligula, eget
        aliquam metus libero in mauris.
      </Text>
      <Text>
        Curabitur pretium dapibus malesuada. Curabitur pulvinar, odio sit amet
        rutrum molestie, sapien sapien vulputate sapien, sit amet elementum diam
        metus a sem. Nullam sit amet purus eget neque dictum semper. Mauris
        volutpat arcu sed scelerisque dapibus. Maecenas egestas orci nec
        hendrerit accumsan. Nam sit amet mi in quam malesuada tempor. Integer ac
        augue a sem consequat hendrerit. Maecenas mollis, urna vel convallis
        placerat, ante nulla tempor ex, commodo consectetur ligula sapien vitae
        felis. Nam a ultricies turpis. Etiam quis nibh vel sem molestie
        malesuada at vitae quam. Quisque non urna faucibus, molestie sapien ac,
        consectetur enim. Morbi efficitur arcu quis velit eleifend efficitur.
        Vivamus sed eleifend risus, ut vehicula nulla.
      </Text>
      <Text>
        Morbi at tristique neque. Vestibulum tortor justo, ultricies ac dolor
        in, vehicula vestibulum ex. Ut sapien quam, ullamcorper et est vel,
        pharetra tincidunt urna. Curabitur vel sem sed velit dictum maximus a ut
        enim. Etiam sagittis elit eget malesuada egestas. Sed vel sapien
        consequat, consequat arcu eu, iaculis purus. Nulla quis tortor leo.
        Donec id leo eu est tempor molestie sit amet interdum purus. Donec
        feugiat mauris vitae odio fringilla dictum ac non ligula. Etiam diam
        tortor, viverra quis tincidunt ut, aliquet a nunc.
      </Text>
      <Text>
        Fusce at lacus rutrum, porttitor ligula ac, rhoncus est. Nam
        pellentesque enim ut risus sagittis scelerisque. Praesent auctor, sapien
        ut posuere iaculis, purus libero mattis libero, eget tincidunt nulla
        nulla et enim. Suspendisse feugiat tristique leo, id hendrerit velit
        consequat in. Ut a placerat ante. Duis a nibh faucibus, malesuada ante
        vitae, posuere lacus. Sed diam dolor, pulvinar in aliquam viverra,
        euismod non erat. Integer non commodo ante. Nam efficitur id turpis ut
        fermentum. Praesent sed dolor nibh. Sed massa neque, facilisis a massa
        in, sollicitudin molestie massa. Vivamus ut nunc id turpis dapibus
        vulputate. Quisque accumsan blandit ligula nec sagittis. Nunc sodales
        libero eu volutpat feugiat. Vivamus non urna eu lectus ultricies tempor.
      </Text>
      <Text>
        Duis sodales elementum ante, lacinia convallis ex ornare in. Fusce
        molestie nisi quis vulputate finibus. Morbi vitae sem vel leo efficitur
        laoreet. Quisque vestibulum purus nec lacus lobortis, quis facilisis
        arcu convallis. Proin sit amet neque efficitur nulla vestibulum congue
        eget id tortor. Praesent nec pellentesque ex. Aenean viverra malesuada
        urna in porttitor. Duis sit amet commodo dui. Nam euismod, turpis quis
        sodales euismod, diam augue sollicitudin nisl, eget pharetra diam nisi
        id orci. Curabitur non venenatis dolor, sit amet ultrices nunc.
      </Text>
      <Text>
        Fusce dapibus eleifend consequat. Vivamus fringilla, eros non laoreet
        aliquet, massa tellus accumsan libero, eget tempus velit arcu blandit
        metus. Maecenas leo dui, viverra non nisi eget, dignissim mollis leo.
        Curabitur commodo hendrerit nisl, sed placerat lacus convallis eu. Ut
        eros purus, tempus tempus rutrum sed, ullamcorper in metus. Suspendisse
        urna nulla, dapibus malesuada bibendum ac, porttitor sit amet quam.
        Pellentesque consectetur rutrum dolor, et ullamcorper eros porta vel. Ut
        tempor felis ut viverra laoreet. Integer gravida diam et eros vulputate
        luctus. Duis felis quam, suscipit sagittis finibus nec, vulputate vel
        sapien. Donec hendrerit tincidunt turpis, sit amet condimentum orci
        hendrerit ac. Suspendisse potenti. Phasellus euismod, turpis sagittis
        condimentum feugiat, massa nibh fermentum purus, et dictum nisi quam ut
        nunc. Vivamus malesuada neque at ultrices pharetra. Fusce ut lacus non
        purus fermentum posuere. Maecenas venenatis sapien id sollicitudin
        ultricies.
      </Text>
      <Text>
        Vestibulum vitae pretium est. Aenean vel interdum nulla, ac rutrum erat.
        Pellentesque vehicula elit dui, a finibus sapien viverra eget. Ut in
        arcu in ligula interdum vehicula. In eleifend quam at purus tristique
        eleifend. Quisque lobortis ullamcorper diam pharetra luctus. Cras et
        malesuada lectus. Morbi eu gravida nibh. Suspendisse vel efficitur
        justo. Donec sed gravida urna. Sed lobortis faucibus sodales. Vivamus
        non tincidunt nisi. Nulla neque lectus, porttitor id fermentum at,
        gravida nec mi. Vivamus dictum nec lacus et faucibus.
      </Text>
    </Stack>
  )
}
