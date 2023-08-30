import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="Truong's Board"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation "
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{ 
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invited
        </Button>
        <AvatarGroup
          max={4}
          sx={{ 
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="TruongLH">
            <Avatar
              alt="avatar"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/367385998_262457600012533_8676934372800844833_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=zcTXtmLTGJYAX8ZeqRG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSoc9n4hIKjnPlBmXocblsbGyvmMM2k-YrVjPWw3_0GWQ&oe=65115298"
            />
          </Tooltip>
          <Tooltip title="TruongLH">
            <Avatar
              alt="avatar"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          </Tooltip>
          <Tooltip title="TruongLH">
            <Avatar
              alt="avatar"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
          </Tooltip>
          <Tooltip title="TruongLH">
            <Avatar
              alt="avatar"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
          </Tooltip>
          <Tooltip title="TruongLH">
            <Avatar
              alt="avatar"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/367385998_262457600012533_8676934372800844833_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=zcTXtmLTGJYAX8ZeqRG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSoc9n4hIKjnPlBmXocblsbGyvmMM2k-YrVjPWw3_0GWQ&oe=65115298"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
