import { Dialog, DialogFooter, IDialogProps, DialogType, IButtonProps, Button } from '@fluentui/react'
import * as React from 'react'
 
export interface IConfirmDialogProps extends IDialogProps {
    confirm: IButtonProps
    cancel: IButtonProps
}

export const ConfirmDialog: React.FC<IConfirmDialogProps> = (props) => {

    const setDefault = (currentProps: IConfirmDialogProps) => {

        currentProps.dialogContentProps = {
            ...currentProps.dialogContentProps,
            type: props?.dialogContentProps?.type || DialogType.largeHeader,
            title: props?.dialogContentProps?.title || "Confirmar",
            subText: props?.dialogContentProps?.subText || "¿Esta seguro que desea ejecutar esta operación?"
        }

        currentProps.modalProps = {
            ...currentProps.modalProps,
            isBlocking: currentProps.modalProps?.isBlocking || true
        }

        currentProps.confirm = {
            ...currentProps.confirm,
            text: currentProps.confirm.text || 'Si',
            onClick: currentProps.confirm.onClick || ((_e: any) => null)
        }
        currentProps.cancel = {
            ...currentProps.cancel,
            text: currentProps.cancel.text || 'No',
            onClick: currentProps.cancel.onClick || ((_e: any) => null)
        }
    }

    setDefault(props)

	const onCofirm = (event: any) => {
        props.confirm.onClick(event)
		onCancel(event)
	}

	const onCancel = (event: any) => {
        props.cancel.onClick(event)
	}
	return (
		<Dialog
			hidden={props.hidden}
			onDismiss={props.cancel.onClick}
			dialogContentProps={{...props.dialogContentProps}}
			modalProps={{...props.modalProps}}
		>
			<DialogFooter>
                {
				    props.confirm && <Button onClick={onCofirm} text={props.confirm.text}></Button>
                }
				{
                    props.cancel && <Button onClick={onCancel} text={props.cancel.text}> </Button>
                }
			</DialogFooter>
		</Dialog>
	)
}