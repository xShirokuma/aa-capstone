"""empty message

Revision ID: 6838ac5fb78f
Revises: 6b8569b2cfc3
Create Date: 2023-12-04 23:33:54.421912

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6838ac5fb78f'
down_revision = '6b8569b2cfc3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_saves',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('pin_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['pin_id'], ['pins.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'pin_id')
    )
    op.drop_table('saves')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('saves',
    sa.Column('user_id', sa.INTEGER(), nullable=False),
    sa.Column('pin_id', sa.INTEGER(), nullable=False),
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('createdAt', sa.DATETIME(), nullable=False),
    sa.Column('updatedAt', sa.DATETIME(), nullable=False),
    sa.ForeignKeyConstraint(['pin_id'], ['pins.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'pin_id')
    )
    op.drop_table('user_saves')
    # ### end Alembic commands ###