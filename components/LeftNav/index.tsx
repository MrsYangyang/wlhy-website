import React, { useState } from 'react'
import type { NextPage } from 'next'
import {  Avatar, MenuList, MenuItem, Stack, Typography, ListItemIcon } from '@mui/material'
import css from './index.module.scss'
import HomeIcon from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import LogoDevIcon from '@mui/icons-material/LogoDev'
import { common, grey, blue } from '@mui/material/colors'

const menu: any[] = [
    { title: '首页', icon: HomeIcon, isChecked: 1 },
    { title: '新闻', icon: ArticleIcon, isChecked: 0 },
    { title: '相关资料', icon: DocumentScannerIcon, isChecked: 0 },
    { title: '技术支持', icon: LogoDevIcon, isChecked: 0 }]
const LeftNav: NextPage = () => {
    const [menus, setMenus] = useState([...menu])
    const handleClickMenu = (item: any) => { 
        const l=menus.map((e:any)=>{
            if(e.title===item.title) return {...e,isChecked:1}
            else return {...e,isChecked:0}
        })
        setMenus([...l])
    }
    return <Stack style={{ width: 200 }} spacing={4}>
        <Stack style={{ paddingLeft: 16 }}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6" align='left'>2022-01-11</Typography>
            <Typography align='left'>上午 08:43</Typography>
        </Stack>
        <MenuList>
            {
                menus.map((item: any, index: number) => {
                    return <div key={`menu${index}`}>
                        <MenuItem  onClick={() => { handleClickMenu(item) }}>
                            <ListItemIcon className={[css[`icon-box-${item.isChecked}`], css['icon-box']].join(' ')} >
                                <item.icon sx={{ color: item.isChecked ? common['white'] : grey[500] }} />
                            </ListItemIcon>
                            <Typography variant="h6" align='left' color={item.isChecked ? blue['A700'] : common['black']}>{item.title}</Typography>
                        </MenuItem>
                    </div>
                })
            }

        </MenuList>
    </Stack>
}

export default LeftNav