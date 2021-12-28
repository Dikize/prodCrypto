import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core'
import { NotificationsNone as NotificationsNoneIcon, ChatBubbleOutline as ChatBubbleOutlineIcon , PowerSettingsNew as PowerSettingsNewIcon, Search as SearchIcon } from '@material-ui/icons';

function Navbar() {

    return (
        <AppBar position="static" className='header'>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                            placeholder="Search"
                            className=''
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>

                    <Grid item sm></Grid>

                    <Grid item>

                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
